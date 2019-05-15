'use strict';

const express = require('express');
const router = express.Router();
const User = require('../database/models/User.js');

router
  .route('/')
  .get((req, res) => {
    new User()
      .fetchAll()
      .then((results) => {
        return res.status(200).send(results.toJSON());
      })
      .catch((err) => {
        console.log('err', err);
      });
  })
  .post((req, res) => {
    new User({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
    })
      .save()
      .then((result) => {
        return res.status(200).send('{ message: "successfully added new user!" }');
      })
      .catch((err) => {
        console.log('error', err);
      });
  });

router.route('/new').get((req, res) => {
  return res.send('This will be a future form for new users.');
});

router
  .route('/:id')
  .get((req, res) => {
    User.where({ id: req.params.id })
      .fetchAll({ withRelated: ['created', 'assigned'] })
      .then((results) => {
        return res.status(200).send(results.toJSON());
      })
      .catch((err) => {
        console.log('err', err);
      });
  })
  .put((req, res) => {
    User.where({ id: req.params.id })
      .save({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
      })
      .then((result) => {
        res.send('{ message: user has successfully been updated! }');
      })
      .catch((err) => {
        console.log('error', err);
      });
  })
  .delete((req, res) => {
    User.where({ id: req.params.id })
      .destroy()
      .then((result) => {
        res.send('{message: user successfully deleted!}');
      })
      .catch((err) => {
        console.log('error', err);
      });
  });

router.route('/:id/edit').get((req, res) => {
  return res.send("Get Users '/:id/edit' smoke test.");
});

module.exports = router;
