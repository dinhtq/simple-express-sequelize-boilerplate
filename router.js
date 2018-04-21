const toDoRouter = require('./routes/toDo.js');

module.exports = (app) => {
  app.use('/api/toDo', toDoRouter);
};
