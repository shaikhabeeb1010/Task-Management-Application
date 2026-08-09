import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";
import { getTasks, createTask, updateTask, deleteTask } from "./services/taskService";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function load() {
    try { setLoading(true); setTasks(await getTasks()); }
    catch (e) { setMessage(e.message); }
    finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  async function save(data) {
    try {
      if (editing) {
        const updated = await updateTask(editing._id, data);
        setTasks((list) => list.map((t) => t._id === updated._id ? updated : t));
        setEditing(null);
        setMessage("Task updated successfully.");
      } else {
        const created = await createTask(data);
        setTasks((list) => [created, ...list]);
        setMessage("Task created successfully.");
      }
    } catch (e) { setMessage(e.message); }
  }

  async function remove(id) {
    if (!window.confirm("Delete this task?")) return;
    try {
      await deleteTask(id);
      setTasks((list) => list.filter((t) => t._id !== id));
      setMessage("Task deleted successfully.");
    } catch (e) { setMessage(e.message); }
  }

  return <div className="app-shell">
    <header className="topbar"><div><span className="brand-mark">TF</span><div><p className="brand">TaskFlow</p><span className="tagline">Simple task management</span></div></div></header>
    <main className="container">
      <section className="hero"><p className="eyebrow">Workspace</p><h1>Organize your work.<br />Stay on track.</h1><p className="hero-copy">Manage tasks, priorities, and deadlines from one simple dashboard.</p></section>
      {message && <div className="notice">{message}<button onClick={() => setMessage("")}>×</button></div>}
      <Dashboard tasks={tasks} />
      <section className="workspace">
        <div>
          <div className="section-heading"><div><p className="eyebrow">Tasks</p><h2>Your task list</h2></div><span>{tasks.length} task{tasks.length === 1 ? "" : "s"}</span></div>
          {loading ? <div className="empty-state">Loading tasks...</div> : tasks.length === 0 ? <div className="empty-state"><h3>No tasks yet</h3><p>Create your first task using the form.</p></div> : <div className="task-grid">{tasks.map(t => <TaskCard key={t._id} task={t} onEdit={setEditing} onDelete={remove} />)}</div>}
        </div>
        <aside><TaskForm task={editing} onSave={save} onCancel={() => setEditing(null)} /></aside>
      </section>
    </main>
  </div>;
}
