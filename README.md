# CoupleBudget

A simple local-first household budget app designed to be easy enough for both partners to use.

## v0.3.0

- CSV transaction import with common banking/export columns
- Auto-category rules based on payee/description text
- Upcoming recurring bills for the next 30 days
- 30 / 60 / 90 day cash forecast
- Existing recurring transactions, monthly history, member summaries and category budgets retained
- JSON backup and CSV export remain local-only

CSV columns understood: `date`, `amount`, `description`/`note`/`payee`, optional `type`, `category`, `member`. Dates use `YYYY-MM-DD`.

No bank credentials, server, analytics or cloud account required.
