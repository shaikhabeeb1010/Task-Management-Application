# TaskFlow - Task Management Application

TaskFlow is a full-stack task management web application built with React, Node.js, Express.js, MongoDB Atlas and Mongoose.

## Features
- Create, view, update and delete tasks
- Status: To Do, In Progress, Done
- Priority: Low, Medium, High
- Due dates
- Dashboard task counts
- Responsive UI

## Tech Stack
Frontend: React.js, Vite, JavaScript, Plain CSS
Backend: Node.js, Express.js, Mongoose
Database: MongoDB Atlas

## Structure
frontend/ - React client
backend/ - Express REST API
docs/ - API and database documentation

## Setup

### Backend
```bash
cd backend
npm install
```
Create `.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
```
Run:
```bash
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## API
GET `/api/tasks`
GET `/api/tasks/:id`
POST `/api/tasks`
PUT `/api/tasks/:id`
DELETE `/api/tasks/:id`

> This repository is a reconstructed implementation of the TaskFlow project based on the confirmed original scope and technology stack.
