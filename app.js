const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const PORT = 3000;
// Set up the express app
const app = express();

const db = require('./models');

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./router.js')(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

db.sequelize.authenticate()
  .then(() => {
    console.log('Connected to db!');
  })
  .catch((err) => {
    console.log(err);
  });

