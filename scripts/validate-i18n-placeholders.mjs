import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve('i18n');
const findings = [];

for (const file of await listFiles(root)) {
  const content = await readFile(file, 'utf8');
  const lines = content.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const matches = lines[index].match(/XQZTOKEN\d+END/g);
    if (matches) {
      findings.push(`${path.relative(process.cwd(), file)}:${index + 1}: ${matches.join(', ')}`);
    }
  }
}

if (findings.length) {
  console.error('Unresolved DeepL markup placeholders found:');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log('No unresolved DeepL markup placeholders found.');

async function listFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listFiles(fullPath));
    else files.push(fullPath);
  }
  return files;
}
