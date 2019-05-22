# Routes

## Get all tasks

GET request to `/tasks`

example response:

```json
[
  {
    "id": 1,
    "group": "Purchases",
    "task": "Go to the bank",
    "dependencyIds": [],
    "completedAt": null
  },
  {
    "id": 2,
    "group": "Purchases",
    "task": "Buy hammer",
    "dependencyIds": [1],
    "completedAt": null
  }
]
```
