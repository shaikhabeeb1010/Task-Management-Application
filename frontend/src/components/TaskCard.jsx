function formatDate(value) {
  if (!value) return "No due date";
  return new Date(value).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

export default function TaskCard({ task, onEdit, onDelete }) {
  return <article className="task-card">
    <div className="task-card-top">
      <span className={`status status-${task.status.toLowerCase().replaceAll(" ", "-")}`}>{task.status}</span>
      <span className={`priority priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
    </div>
    <h3>{task.title}</h3>
    {task.description && <p>{task.description}</p>}
    <div className="task-meta">Due: {formatDate(task.dueDate)}</div>
    <div className="task-actions">
      <button className="secondary-button" onClick={() => onEdit(task)}>Edit</button>
      <button className="danger-button" onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  </article>;
}
