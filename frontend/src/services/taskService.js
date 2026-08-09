const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";

async function request(url, options = {}) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
}

export const getTasks = () => request(API_URL);
export const createTask = (task) => request(API_URL, { method: "POST", body: JSON.stringify(task) });
export const updateTask = (id, task) => request(`${API_URL}/${id}`, { method: "PUT", body: JSON.stringify(task) });
export const deleteTask = (id) => request(`${API_URL}/${id}`, { method: "DELETE" });
