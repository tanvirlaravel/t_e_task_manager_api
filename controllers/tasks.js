const Task = require("./../models/Tasks");

const getAllTasks = (req, res) => {};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json(`get task id : ${req.params.id}`);
};

const updateTask = (req, res) => {
  res.json(`updated id : ${req.params.id}`);
};

const deleteTask = (req, res) => {
  res.json(`deleted id : ${req.params.id}`);
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
