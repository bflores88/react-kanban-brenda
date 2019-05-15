const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const bcrypt = require('bcryptjs');

const cards = require('./routes/cards.js')
const users = require('./routes/users.js')
const priorities = require('./routes/priorities.js')
const statuses = require('./routes/statuses.js')

const Card = require('./database/models/Card');
const User = require('./database/models/User');
const Priority = require('./database/models/Priority');
const Status = require('./database/models/Status');


require('dotenv').config();

const PORT = process.env.EXPRESS_CONTAINER_PORT;

const app = express();

app.use('/api/cards', cards);
app.use('/api/users', users);
app.use('/api/priorities', priorities);
app.use('/api/statuses', statuses);

app.get('/api', (req, res) => {
  return res.send('{message: smoke test}')
})


const server = app.listen(PORT, () => {
  console.log(`Express app is running at port ${PORT}`);
})