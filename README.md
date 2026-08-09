# TaskFlow – Task Management Application

TaskFlow is a full-stack task management application designed to help users organize work, track priorities, manage deadlines, and monitor task progress from a single dashboard.

## Features

- Create, view, update, and delete tasks
- Task status: To Do, In Progress, Done
- Task priority: Low, Medium, High
- Due-date management
- Dashboard with total and status-wise task counts
- Responsive user interface
- RESTful backend API
- Persistent MongoDB Atlas storage

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- Plain CSS

### Backend
- Node.js
- Express.js
- Mongoose
- REST API

### Database
- MongoDB Atlas

### Tools
- Git
- GitHub
- npm
- VS Code

## Application Architecture

```text
React + Vite
     |
     | HTTP / REST API
     v
Node.js + Express
     |
     | Mongoose
     v
MongoDB Atlas
```

## Project Structure

```text
Task-Management-Application/
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── .env.example
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskForm.jsx
│   │   ├── services/
│   │   │   └── taskService.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── docs/
│   ├── api.md
│   └── database.md
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account

### 1. Clone the repository

```bash
git clone https://github.com/shaikhabeeb1010/Task-Management-Application.git
cd Task-Management-Application
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
```

Never commit the `.env` file or expose database credentials publicly.

Start the backend:

```bash
npm run dev
```

The API runs at:

```text
http://localhost:5000
```

### 3. Configure the frontend

Open another terminal:

```bash
cd frontend
npm install
```

The application uses:

```text
http://localhost:5000/api/tasks
```

by default.

You can optionally create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api/tasks
```

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed by Vite, normally:

```text
http://localhost:5173
```

## REST API

Base URL:

```text
http://localhost:5000/api
```

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Retrieve a specific task |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

### Example: Create a Task

```json
{
  "title": "Complete project documentation",
  "description": "Prepare the project README and API documentation",
  "status": "To Do",
  "priority": "High",
  "dueDate": "2026-08-20"
}
```

## Database Model

TaskFlow stores tasks in MongoDB using Mongoose.

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | String | Yes | Task title |
| `description` | String | No | Task details |
| `status` | String | No | To Do, In Progress, or Done |
| `priority` | String | No | Low, Medium, or High |
| `dueDate` | Date | No | Task deadline |
| `createdAt` | Date | Automatic | Creation timestamp |
| `updatedAt` | Date | Automatic | Last update timestamp |

## Tested Functionality

The application has been tested locally for:

- Task creation
- Task retrieval
- Task editing
- Task deletion
- Status changes
- Priority changes
- Due-date handling
- Dashboard task counts
- React-to-Express API communication
- MongoDB Atlas persistence

## Environment Variables

Example configuration files are included:

```text
backend/.env.example
frontend/.env.example
```

Actual `.env` files are excluded from version control using `.gitignore`.

## Documentation

Additional documentation is available in the `docs/` directory:

- [API Documentation](docs/api.md)
- [Database Documentation](docs/database.md)

## Future Enhancements

- User authentication and authorization
- User-specific task lists
- Search and filtering
- Task sorting and pagination
- Drag-and-drop task organization
- Notifications and reminders
- Task categories and labels
- Cloud deployment

## License

This project is intended for educational and portfolio purposes.
