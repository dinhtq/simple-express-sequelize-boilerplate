const toDoController = require('../controllers/toDo.js');
const toDoItemController = require('../controllers/toDoItem.js');
const toDoRouter = require('express').Router();

toDoRouter
  .get('/', toDoController.list)
  .post('/', toDoController.create);

toDoRouter
  .get('/:id', toDoItemController.list)
  .post('/:id', toDoItemController.create);

module.exports = toDoRouter;
