# CoupleBudget

CoupleBudget is a **local-first household budgeting app** designed to be simple enough that two people can actually keep using it together.

It focuses on the everyday questions a household needs to answer:

- How much came in this month?
- How much have we spent?
- How much is left?
- Which categories are over budget?
- What bills are coming next?
- Are we on track for our savings goals?
- When could we become debt-free?

No bank credentials, cloud account or analytics service is required.

## What it does

CoupleBudget combines day-to-day expense tracking with lightweight planning:

- income and expense tracking
- shared household categories
- monthly category budgets
- recurring transactions
- upcoming-bill view
- CSV import
- automatic category rules
- 30 / 60 / 90-day cash forecast
- savings goals
- goal contributions
- debt payoff planning
- avalanche and snowball strategies
- estimated payoff date and interest
- monthly savings-rate report
- JSON backup/export

## How it works

```text
Income + expenses + recurring bills
              ↓
      Local household ledger
              ↓
 Categories / monthly budgets / reports
              ↓
 Forecasts + savings goals + debt plan
```

The application stores its working state locally in the browser. There is no CoupleBudget backend receiving your transaction history.

## Typical monthly workflow

```text
1. Add or import income and expenses
2. Let category rules classify recurring merchants/descriptions
3. Review category spending against monthly limits
4. Check upcoming recurring bills
5. Review the 30/60/90-day forecast
6. Add money to savings goals
7. Review debt payoff progress
8. Export a JSON backup periodically
```

## CSV import

CoupleBudget can import transaction data from CSV instead of requiring every transaction to be entered manually.

The import flow is intended for exported bank/account data. Automatic category rules can then reuse known descriptions/merchants to reduce repetitive categorization.

Because banks export CSV files in different formats, import quality depends on the columns and formatting provided by the source file.

## Recurring transactions and upcoming bills

Recurring income and expenses can be stored as schedules. CoupleBudget uses them to surface upcoming obligations and to improve cash forecasting.

This is useful for items such as:

- rent
- utilities
- subscriptions
- insurance
- salary
- regular transfers

## Cash forecast

The app can estimate household cash flow over the next:

- 30 days
- 60 days
- 90 days

The forecast is based on the data you entered, including recurring transactions. It is a planning estimate, not a guaranteed account-balance prediction.

## Savings goals

Savings goals can include a target amount and target date. CoupleBudget tracks contributions and estimates how much would need to be saved per month to reach the target.

Example:

```text
Emergency fund
Target: €3,000
Saved:  €1,250
Target date: 2027-03-01
```

## Debt payoff planner

CoupleBudget supports two common planning methods:

- **Avalanche** — prioritize higher-interest debt
- **Snowball** — prioritize smaller balances

You can model extra monthly debt payments and estimate:

- payoff duration
- projected debt-free date
- estimated interest paid

These projections are simplified planning calculations and **not financial advice**.

## Monthly report

The monthly report summarizes items such as:

- income
- spending
- remaining cash
- savings rate
- top spending category
- categories over budget

The goal is to make the household situation understandable without requiring a complex accounting application.

## Privacy model

CoupleBudget is local-first:

- no bank login required
- no bank credentials stored by CoupleBudget
- no hosted backend
- no analytics
- no advertising tracker
- no mandatory account

Your browser/device remains responsible for local data storage, so regular backups are recommended.

## Backup and restore

JSON backup includes the core household state, including goals and debts in v0.4.0.

Keep backups somewhere you control, especially before clearing browser storage or moving to another computer.

## Current limitations

CoupleBudget is intentionally simpler than a full banking/accounting platform.

Current limitations include:

- no direct bank synchronization
- no multi-device real-time household sync
- no server-side account recovery
- no tax/accounting guarantees
- forecasts depend on the accuracy of entered transactions and recurring schedules
- debt calculations are estimates
- clearing browser storage can remove local app data if no backup exists

## Roadmap

Possible next steps:

- OFX/QFX import
- richer transaction import mapping
- better auto-categorization rules
- custom reporting periods
- goal automation
- optional encrypted household sync
- optional self-hosted mode
- PWA install/offline polish

## Version

Current release: **v0.4.0**

## Security

See [SECURITY.md](SECURITY.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
