const express = require('express');
const Sequelize = require('sequelize');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = 3000;
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

const sequelize = new Sequelize({
  database: 'todo',
  username: 'postgres',
  password: '',
  dialect: 'postgres'
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

sequelize.authenticate()
.then(() => {
  console.log('Connected to db!');
})
.catch((err) => {
  console.log(err);
});

