# CoupleBudget

A simple local-first household budget app designed to be easy enough that both partners actually use it.

## v0.2.0

- Monthly and weekly recurring income/expense schedules
- Automatic catch-up of missed recurring occurrences
- Browse historical months instead of only the current month
- Per-member monthly summary
- Category budget progress
- Search, JSON backup/import and CSV export
- Local-only storage and installable PWA

## Run

```bash
python -m http.server 8080
```

Open `http://localhost:8080`. CoupleBudget deliberately avoids bank credentials and cloud accounts; it focuses on simple shared household tracking.
