const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'todo',
  username: 'postgres',
  password: '',
  dialect: 'postgres'
});

sequelize.authenticate()
.then(() => {
  console.log('Connected to db!');
})
.catch((err) => {
  console.log(err);
});