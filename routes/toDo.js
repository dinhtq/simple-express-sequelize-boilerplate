const toDoController = require('../controllers/toDo.js');
const toDoRouter = require('express').Router();

toDoRouter
  .get('/', toDoController.list);

module.exports = toDoRouter;
