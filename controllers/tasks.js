const taskSchema = require("../models/tasks");

const createTask = (req, res) => {
  const task = new taskSchema({
    title: req.body.title,
    assignee: req.body.assignee,
  });

  task.save().then(() => {
    console.log("Task Created Successfully"); //print in console
    res.status(200).json({ message: "Task Created Successfully" }); //send json to requester
  });
};

const getTask = (req, res) => {
  res.status(200).json({ taskId: req.params.id });
};

const updateTask = (req, res) => {
  res.status(200).json({ taskId: req.params.id });
};

const deleteTask = (req, res) => {
  res.status(200).json({ taskId: req.params.id });
};

module.exports = { createTask, getTask, updateTask, deleteTask };
