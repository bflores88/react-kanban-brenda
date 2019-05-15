const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const bcrypt = require('bcryptjs');

const users = require('./routes/users.js')
const Card = require('./database/models/Card');


require('dotenv').config();

const PORT = process.env.EXPRESS_CONTAINER_PORT;

const app = express();

app.use('/api/users', users);

app.get('/api', (req, res) => {
  new Card()
      .fetchAll()
      .then((results) => {

        return res.send(results.toJSON())
      })
      .catch((err) => {
      console.log('err', err)
    })
})


const server = app.listen(PORT, () => {
  console.log(`Express app is running at port ${PORT}`);
})