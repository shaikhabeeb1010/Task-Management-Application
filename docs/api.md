# TaskFlow API

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get one task |
| POST | `/tasks` | Create a task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

Example POST body:
```json
{
  "title": "Complete documentation",
  "description": "Prepare project documentation",
  "status": "To Do",
  "priority": "High",
  "dueDate": "2026-08-20"
}
```
