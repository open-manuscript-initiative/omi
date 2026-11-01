import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

test('shared Studio profile golden has valid ZIP CRCs, SHA-256 members and exact historical digest evidence', () => {
  // Independent standard-library ZIP reader. This verifies the bounded shared
  // fixture, not independent certification of the complete OMI specification.
  const fixture = fileURLToPath(new URL('../static/examples/studio-container-profile-v1/golden.json', import.meta.url));
  const result = execFileSync('python3', ['-c', String.raw`
import base64,copy,hashlib,io,json,sys,zipfile
f=json.load(open(sys.argv[1])); raw=base64.b64decode(f['packageBase64'])
assert f['synthetic'] is True
assert hashlib.sha256(raw).hexdigest()==f['sha256']
z=zipfile.ZipFile(io.BytesIO(raw)); assert z.testzip() is None
manifest=json.loads(z.read('META-INF/manifest.json'))
assert manifest['serializationProfile']==f['serializationProfile']=='urn:omi:studio:container:asset-previews:1'
checks=json.loads(z.read('META-INF/checksums.json'))
for item in checks['entries']:
 assert hashlib.sha256(z.read(item['path'])).hexdigest()==item['value']
asset=next(e for e in manifest['entries'] if e.get('assetId')==f['assetId'])
assert hashlib.sha256(z.read(asset['path'])).hexdigest()==f['assetSha256']
history=json.loads(z.read('manuscript/history.json'))
# Retain v1 semantics exactly: it normalizes blocks below root sections, but
# did not normalize embedded section children. Do not silently rewrite it.
def block(b):
 b=copy.deepcopy(b)
 if b.get('visual',{}).get('kind')=='image' and b['visual'].get('assetId'): b['visual']['src']=''
 if 'children' in b: b['children']=[block(c) for c in b['children']]
 return b
def digest(state):
 state=copy.deepcopy(state)
 for section in state['sections']: section['blocks']=[block(b) for b in section['blocks']]
 return hashlib.sha256(json.dumps(state,ensure_ascii=False,separators=(',',':'),sort_keys=True).encode()).hexdigest()
assert [digest(r['snapshot']['state']) for r in history['revisionHistory']['revisions']]==f['revisionStateDigests']
assert 'data:image/' in z.read('manuscript/history.json').decode()
print('verified synthetic golden')
`, fixture], { encoding: 'utf8' });
  assert.equal(result.trim(), 'verified synthetic golden');
});
