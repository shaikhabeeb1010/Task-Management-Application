import { useEffect, useState } from "react";

const empty = { title: "", description: "", status: "To Do", priority: "Medium", dueDate: "" };

export default function TaskForm({ task, onSave, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    setForm(task ? {
      title: task.title || "",
      description: task.description || "",
      status: task.status || "To Do",
      priority: task.priority || "Medium",
      dueDate: task.dueDate ? task.dueDate.slice(0, 10) : ""
    } : empty);
  }, [task]);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    await onSave({ ...form, title: form.title.trim(), dueDate: form.dueDate || null });
    if (!task) setForm(empty);
  }

  return <form className="task-form" onSubmit={submit}>
    <div className="form-heading">
      <div><p className="eyebrow">{task ? "Update" : "Create"}</p><h2>{task ? "Edit task" : "Add a task"}</h2></div>
      {task && <button type="button" className="text-button" onClick={onCancel}>Cancel</button>}
    </div>
    <label>Title<input name="title" value={form.title} onChange={change} required /></label>
    <label>Description<textarea name="description" value={form.description} onChange={change} rows="4" /></label>
    <div className="form-grid">
      <label>Status<select name="status" value={form.status} onChange={change}><option>To Do</option><option>In Progress</option><option>Done</option></select></label>
      <label>Priority<select name="priority" value={form.priority} onChange={change}><option>Low</option><option>Medium</option><option>High</option></select></label>
    </div>
    <label>Due date<input type="date" name="dueDate" value={form.dueDate} onChange={change} /></label>
    <button className="primary-button" type="submit">{task ? "Save changes" : "Create task"}</button>
  </form>;
}
