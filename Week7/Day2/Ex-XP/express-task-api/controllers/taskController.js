const { readTasksFromFile, writeTaskToFile } = require("../utils/taskUtils.js");

const getAllTasks = (req, res) => {
  const tasks = readTasksFromFile();
  res.json(tasks);
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const tasks = readTasksFromFile();
  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json(task);
};

const createTask = (req, res) => {
  const { title, description } = req.body;
  const tasks = readTasksFromFile();

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }
  const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
  const newTaskId = maxId + 1;
  const newTask = {
    id: newTaskId,
    title: title,
    description: description,
  };
  tasks.push(newTask);
  writeTaskToFile(tasks);
  res.status(201).json({ message: "Task added successfully" });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }
  const tasks = readTasksFromFile();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks[taskIndex] = { id: tasks[taskIndex].id, title, description };
  writeTaskToFile(tasks);
  res.json(tasks[taskIndex]);
};

const deleteTask = (req, res) => {
  const tasks = readTasksFromFile();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks.splice(taskIndex, 1);
  writeTaskToFile(tasks);
  res.status(204).send();
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
