const { ToDoItem, ToDo } = require('../models');
const uuid = require('uuid/v4');

module.exports = {
  list(req, res, next) {
    ToDoItem.findAll({
      include: [{
        model: ToDo,
        as: 'toDo',
      }],
    })
      .then((result) => {
        res.send(result);
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    ToDoItem.create({
      id: uuid(),
      toDoId: req.params.id,
      description: req.body.name,
    })
      .then((result) => {
        // console.log('result', result);
        res.send(result);
      })
      .catch(err => next(err));
  },
};
