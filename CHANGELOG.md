# Changelog

## V1.0
- Pressing Enter creates a new task row
- Cursor automatically moves to the new task
- Pressing Delete on an empty task removes the row, unless its the only row in task area           (v)
- Prevented the last remaining task row from being deleted


## V2 — Task Persistence

### Added
- Tasks are now saved using `localStorage`.
- Tasks are organized and stored by day.
- Tasks persist after refreshing or closing the page.
- New tasks no longer overwrite tasks saved for other days.
- Saved tasks are automatically loaded when the page opens.

### Notes V2.5
- Checkbox completion states are not currently saved.
- Checkbox persistence will be added in a future version.