import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const src=readFileSync(new URL('../app.js',import.meta.url),'utf8'),html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
test('v0.3 budgeting features wired',()=>{assert.match(src,/function parseCsv/);assert.match(src,/function importCsv/);assert.match(src,/function applyRules/);assert.match(src,/function forecast/);assert.match(src,/function upcoming/);assert.match(html,/Import CSV/);assert.match(html,/Cash forecast/);assert.match(html,/Auto-category rules/)})
