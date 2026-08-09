export default function Dashboard({ tasks }) {
  const counts = tasks.reduce((a, t) => {
    a.total++;
    if (t.status === "To Do") a.todo++;
    if (t.status === "In Progress") a.progress++;
    if (t.status === "Done") a.done++;
    return a;
  }, { total: 0, todo: 0, progress: 0, done: 0 });

  return <section className="dashboard">
    <div className="dashboard-heading"><div><p className="eyebrow">Overview</p><h2>Task dashboard</h2></div><span>{counts.total} total</span></div>
    <div className="stats-grid">
      <div className="stat-card"><span>Total tasks</span><strong>{counts.total}</strong></div>
      <div className="stat-card"><span>To Do</span><strong>{counts.todo}</strong></div>
      <div className="stat-card"><span>In Progress</span><strong>{counts.progress}</strong></div>
      <div className="stat-card"><span>Done</span><strong>{counts.done}</strong></div>
    </div>
  </section>;
}
