import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const src=readFileSync(new URL('../app.js', import.meta.url),'utf8');
test('recurring budget features are wired',()=>{assert.match(src,/materializeRecurring/);assert.match(src,/cadence===\'weekly\'/);assert.match(src,/recurrenceId/);assert.match(src,/viewMonth/)});
