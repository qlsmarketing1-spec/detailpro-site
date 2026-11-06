#!/usr/bin/env node
// Create any contact attributes from src/lib/brevo-attributes.json that are
// missing in Brevo. Safe to re-run: existing attributes are left untouched.
//
//   BREVO_API_KEY=xkeysib-... npm run brevo:setup
//   (or put BREVO_API_KEY in .env.local)

import { readFileSync, existsSync } from 'node:fs';

if (!process.env.BREVO_API_KEY && existsSync('.env.local')) {
  const m = readFileSync('.env.local', 'utf8').match(/^BREVO_API_KEY=(.*)$/m);
  if (m) process.env.BREVO_API_KEY = m[1].trim().replace(/^["']|["']$/g, '');
}
const apiKey = process.env.BREVO_API_KEY;
if (!apiKey) {
  console.error('BREVO_API_KEY is not set (env or .env.local).');
  process.exit(1);
}

const { attributes: wanted } = JSON.parse(
  readFileSync(new URL('../src/lib/brevo-attributes.json', import.meta.url), 'utf8'),
);
const headers = { accept: 'application/json', 'content-type': 'application/json', 'api-key': apiKey };

const res = await fetch('https://api.brevo.com/v3/contacts/attributes', { headers });
if (!res.ok) {
  console.error('Could not read Brevo attributes:', res.status, await res.text());
  process.exit(1);
}
const existing = new Map((await res.json()).attributes.map((a) => [a.name, a]));

let created = 0;
let failed = 0;
for (const { name, type } of wanted) {
  const have = existing.get(name);
  if (have) {
    const note = have.type && have.type !== type ? `  (exists as ${have.type}, expected ${type})` : '';
    console.log(`ok       ${name}${note}`);
    continue;
  }
  const r = await fetch(`https://api.brevo.com/v3/contacts/attributes/normal/${name}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ type }),
  });
  if (r.ok) {
    created++;
    console.log(`created  ${name} (${type})`);
  } else {
    failed++;
    console.error(`FAILED   ${name}: ${r.status} ${await r.text()}`);
  }
}

const listId = Number(process.env.BREVO_LIST_ID) || 4;
const lr = await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}`, { headers });
console.log(
  lr.ok ? `\nlist ${listId}: "${(await lr.json()).name}"` : `\nWARNING: list ${listId} not found (${lr.status}). Set BREVO_LIST_ID.`,
);
console.log(`${created} created, ${wanted.length - created - failed} already present, ${failed} failed.`);
process.exit(failed ? 1 : 0);
