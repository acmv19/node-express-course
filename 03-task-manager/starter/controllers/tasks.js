const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  //res.send("get all tasks");
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  //res.send("all items from the file");
  //const task = await Task.create({ name: "first task" });
  // res.status(201).json(req.body);
  //try {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
  //} catch (error) {
  //res.status(500).json({ mesg: error });
  //}
});

/*const getTask = async (req, res) => {
  //res.send("get single tasks");
  //res.json({ id: req.params.id });
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `not find task with the id:${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ mesg: error });
  }
};*/

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`not find task with the id:${taskID}`, 404));
  }
  res.status(200).json({ task });
});

/*const deleteTask = async (req, res) => {
  // res.send("delete tasks");
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `not find task with the id:${taskID}` });
    }
    //res.status(200).json({ task }); una forma de escribirlo
    //res.status(200).send() otra forma de escribirlo
    res.status(200).json({ task: null, status: "success" }); //otra forma de escribirlo
  } catch (error) {
    res.status(500).json({ mesg: error });
  }
};*/

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    //return res.status(404).json({ msg: `not find task with the id:${taskID}` });
    return next(createCustomError(`not find task with the id:${taskID}`, 404));
  }
  res.status(200).json({ task: null, status: "success" }); //otra forma de escribirlo
});

/*const updateTask = async (req, res) => {
  //res.send("update tasks");
  try {
    const { id: taskID } = req.params;
    // res.status(200).json({ id: taskID, data: req.body });
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    res.status(500).json({ mesg: error });
  }
};*/

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    //return res.status(404).json({ msg: `not task with id: ${taskID}` });
    return next(createCustomError(`not find task with the id:${taskID}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
