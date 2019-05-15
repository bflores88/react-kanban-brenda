const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const bcrypt = require('bcryptjs');

const users = require('./routes/users.js')

const PORT = 3000;

require('dotenv').config();

const app = express();
app.use(express.static('public'));

app.use('/users', users);

app.get('/', (req, res) => {
  return res.send('mehhhhhh');
})


const server = app.listen(PORT, () => {
  console.log(`Express app is running at port ${PORT}`);
})