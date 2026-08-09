const mongoose = require("mongoose");
const Task = require("../models/Task");

const validId = (id) => mongoose.Types.ObjectId.isValid(id);

async function getTasks(req, res, next) {
  try { res.json(await Task.find().sort({ createdAt: -1 })); }
  catch (e) { next(e); }
}

async function getTask(req, res, next) {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ message: "Invalid task id" });
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (e) { next(e); }
}

async function createTask(req, res, next) {
  try {
    const { title, description, status, priority, dueDate } = req.body;
    if (!title || !title.trim()) return res.status(400).json({ message: "Task title is required" });
    const task = await Task.create({ title, description, status, priority, dueDate: dueDate || null });
    res.status(201).json(task);
  } catch (e) { next(e); }
}

async function updateTask(req, res, next) {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ message: "Invalid task id" });
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (e) { next(e); }
}

async function deleteTask(req, res, next) {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ message: "Invalid task id" });
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted successfully" });
  } catch (e) { next(e); }
}

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
