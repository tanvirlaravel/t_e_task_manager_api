const getAllTasks = (req, res) => {
  res.send("All Items");
};

const createTask = (req, res) => {
  res.json(req.body);
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
