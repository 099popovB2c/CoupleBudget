import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const src=readFileSync(new URL('../app.js',import.meta.url),'utf8'),html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
test('v0.4 household planning features wired',()=>{assert.match(src,/function debtProjection/);assert.match(src,/function goalMonthlyNeed/);assert.match(src,/function monthlyReport/);assert.match(src,/debtStrategy/);assert.match(src,/goals/);assert.match(html,/Savings goals/);assert.match(html,/Debt payoff planner/);assert.match(html,/Monthly report/)})
