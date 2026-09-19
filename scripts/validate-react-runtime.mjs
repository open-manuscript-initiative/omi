import { readFile } from 'node:fs/promises';

const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const lock = JSON.parse(await readFile(new URL('../package-lock.json', import.meta.url), 'utf8'));

const packageReact = pkg.dependencies?.react;
const packageReactDom = pkg.dependencies?.['react-dom'];
const lockRootReact = lock.packages?.['']?.dependencies?.react;
const lockRootReactDom = lock.packages?.['']?.dependencies?.['react-dom'];
const installedReact = lock.packages?.['node_modules/react']?.version;
const installedReactDom = lock.packages?.['node_modules/react-dom']?.version;

const failures = [];

if (!packageReact || !packageReactDom) {
  failures.push('package.json must declare both react and react-dom.');
}
if (packageReact !== packageReactDom) {
  failures.push(`package.json React mismatch: react=${packageReact}, react-dom=${packageReactDom}`);
}
if (lockRootReact !== packageReact || lockRootReactDom !== packageReactDom) {
  failures.push(
    `package-lock root dependency mismatch: react=${lockRootReact}, react-dom=${lockRootReactDom}`,
  );
}
if (installedReact !== installedReactDom) {
  failures.push(
    `installed React runtime mismatch: react=${installedReact}, react-dom=${installedReactDom}`,
  );
}
if (installedReact !== packageReact) {
  failures.push(
    `declared/locked React mismatch: package=${packageReact}, installed=${installedReact}`,
  );
}

if (failures.length) {
  console.error('React runtime versions are inconsistent:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`React runtime versions verified: react = react-dom = ${installedReact}.`);
