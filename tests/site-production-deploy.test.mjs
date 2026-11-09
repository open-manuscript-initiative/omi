import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, utimesSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('../scripts/deploy-website-artifact.sh', import.meta.url));
const commit = 'a'.repeat(40);

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'omi-website-deploy-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const home = join(root, 'home');
  const target = join(root, 'httpdocs');
  mkdirSync(home);
  mkdirSync(target);
  mkdirSync(join(target, '.well-known'), { recursive: true });
  writeFileSync(join(target, 'index.html'), 'Old public site');
  // Reproduce rsync's size+mtime quick-check false negative (same-size HTML).
  const equalTimestamp = new Date('2020-01-01T00:00:00.000Z');
  utimesSync(join(target, 'index.html'), equalTimestamp, equalTimestamp);
  writeFileSync(join(target, '.htaccess'), 'Plesk configuration');
  writeFileSync(join(target, '.well-known', 'acme.txt'), 'ACME data');
  writeFileSync(join(target, 'custom.html'), 'Unmanaged file');
  return {
    root, home, target,
    env: {
      ...process.env,
      HOME: home,
      OMI_SITE_DEPLOY_TEST_MODE: '1',
      OMI_SITE_DEPLOY_TEST_TARGET: target,
    },
  };
}

function packageSite(f, id, files = {}) {
  const site = join(f.root, 'site-' + id);
  mkdirSync(join(site, 'hu'), { recursive: true });
  mkdirSync(join(site, 'de'), { recursive: true });
  writeFileSync(join(site, 'index.html'), 'New English ' + id);
  const equalTimestamp = new Date('2020-01-01T00:00:00.000Z');
  utimesSync(join(site, 'index.html'), equalTimestamp, equalTimestamp);
  writeFileSync(join(site, 'hu', 'index.html'), 'Új magyar ' + id);
  writeFileSync(join(site, 'de', 'index.html'), 'Neues Deutsch ' + id);
  mkdirSync(join(site, 'omi-releases'), { recursive: true });
  writeFileSync(join(site, 'omi-releases', commit + '.txt'), commit + '\n');
  for (const [path, contents] of Object.entries(files)) {
    mkdirSync(dirname(join(site, path)), { recursive: true });
    writeFileSync(join(site, path), contents);
  }
  const incoming = join(f.home, '.omi-website-deploy', 'incoming');
  mkdirSync(incoming, { recursive: true });
  const archive = join(incoming, id + '-' + commit + '.tar.gz');
  execFileSync('tar', ['-czf', archive, '-C', site, '.']);
  const sha256 = createHash('sha256').update(readFileSync(archive)).digest('hex');
  return { id, archive, sha256 };
}

function deploy(f, pkg, extraEnv = {}) {
  return spawnSync('bash', [script, commit, pkg.id, pkg.sha256], {
    env: { ...f.env, ...extraEnv },
    encoding: 'utf8',
    timeout: 60000,
  });
}

test('publish verified site without erasing untracked Plesk and ACME files', (t) => {
  const f = fixture(t);
  const p = packageSite(f, '100', { 'old-managed.html': 'old generated page' });
  const result = deploy(f, p);
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.equal(statSync(join(f.target, 'index.html')).size, 'Old public site'.length,
    'This regression intentionally compares identical file sizes');
  assert.equal(readFileSync(join(f.target, 'index.html'), 'utf8'), 'New English 100');
  assert.equal(readFileSync(join(f.target, 'omi-releases', commit + '.txt'), 'utf8').trim(), commit);
  assert.equal(readFileSync(join(f.target, 'custom.html'), 'utf8'), 'Unmanaged file');
  assert.equal(readFileSync(join(f.target, '.htaccess'), 'utf8'), 'Plesk configuration');
  assert.equal(readFileSync(join(f.target, '.well-known', 'acme.txt'), 'utf8'), 'ACME data');
  assert.equal(readFileSync(join(f.home, '.omi-website-deploy', 'current-commit'), 'utf8').trim(), commit);
  const snapshot = join(f.home, '.omi-website-deploy', 'backups', 'release-100-' + commit.slice(0, 12));
  assert.equal(readFileSync(join(snapshot, 'web', 'index.html'), 'utf8'), 'Old public site');
  assert.ok(existsSync(join(snapshot, 'snapshot-complete')));
  assert.ok(!existsSync(p.archive));

  const newer = packageSite(f, '101', { 'new-managed.html': 'new generated page' });
  const next = deploy(f, newer);
  assert.equal(next.status, 0, next.stderr || next.stdout);
  assert.ok(!existsSync(join(f.target, 'old-managed.html')));
  assert.equal(readFileSync(join(f.target, 'new-managed.html'), 'utf8'), 'new generated page');
  assert.equal(readFileSync(join(f.target, 'custom.html'), 'utf8'), 'Unmanaged file');
});

test('failed post-publication verification restores full previous content', (t) => {
  const f = fixture(t);
  const p = packageSite(f, '200', { 'new-managed.html': 'not to persist' });
  const result = deploy(f, p, { OMI_SITE_DEPLOY_TEST_FAIL: '1' });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /restoring the previous Plesk document root/i);
  assert.equal(readFileSync(join(f.target, 'index.html'), 'utf8'), 'Old public site');
  assert.ok(!existsSync(join(f.target, 'new-managed.html')));
  assert.equal(readFileSync(join(f.target, '.well-known', 'acme.txt'), 'utf8'), 'ACME data');
  assert.ok(!existsSync(join(f.home, '.omi-website-deploy', 'current-commit')));
  assert.ok(existsSync(p.archive));
});

test('reject tampered artifact without touching the live site', (t) => {
  const f = fixture(t);
  const p = packageSite(f, '300');
  const result = deploy(f, { ...p, sha256: '0'.repeat(64) });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /SHA-256 mismatch/);
  assert.equal(readFileSync(join(f.target, 'index.html'), 'utf8'), 'Old public site');
  assert.equal(existsSync(join(f.home, '.omi-website-deploy', 'backups', 'release-300-' + commit.slice(0, 12))), false);
});
