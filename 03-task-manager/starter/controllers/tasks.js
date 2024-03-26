const task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = async (req, res) => {
  //res.send("all items from the file");
  //const task = await task.create({ name: "first task" });
  // res.status(201).json(req.body);
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  //res.send("get single tasks");
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update tasks");
};

const deleteTask = (req, res) => {
  res.send("delete tasks");
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
