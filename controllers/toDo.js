const { ToDo } = require('../models');
const uuid = require('uuid/v4');

module.exports = {
  list(req, res, next) {
    ToDo.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    ToDo.create({
      id: uuid(),
      title: req.body.title,
    })
      .then((result) => {
        console.log('result', result);
        res.send(result);
      })
      .catch(err => next(err));
  },
};
