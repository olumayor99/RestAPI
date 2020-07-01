const taskSchema = require("../models/tasks");

const createTask = async (req, res) => {
  const task = await new taskSchema({
    title: req.body.title,
    assignee: req.body.assignee,
  });

  task
    .save()
    .then(() => {
      console.log("Task Created Successfully"); //print in console
      res.status(200).json({ message: "Task Created Successfully" }); //send json to requester
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

const getTask = (req, res) => {
  taskSchema.find({ _id: req.params.id }, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(results);
    }
  });
};

const updateTask = async (req, res) => {
  const taskUpdate = await taskSchema.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        assignee: req.body.assignee,
      },
    },
    { new: true }
  );
  if (taskUpdate) {
    res.status(200).json({ message: "Successfully Updated" });
  } else {
    res.status(500).json({ message: "Did not update" });
  }
};

const deleteTask = async (req, res) => {
  const taskDelete = await taskSchema.findByIdAndDelete({ _id: req.params.id });
  if (taskDelete) {
    res.status(200).json({ message: "Successfully deleted" });
  } else {
    res.status(500).json({ message: "Did not delete" });
  }
};

module.exports = { createTask, getTask, updateTask, deleteTask };
