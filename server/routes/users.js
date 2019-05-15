'use strict';

const express = require('express');
const router = express.Router();
const User = require('../database/models/User.js');

router.route('/')
  .get((req, res) => {
    new User()
      .fetchAll()
      .then((results) => {

        return res.status(200).send(results.toJSON())
      })
      .catch((err) => {
      console.log('err', err)
    })
  })

router.route('/new')
.get((req, res) => {
  return res.send("This will be a future form for new users.")
})

router.route('/:id')
  .get((req, res) => {
    new User({id: req.params.id})
      .fetch()
      .then((results) => {

        return res.status(200).send(results.toJSON())
      })
      .catch((err) => {
      console.log('err', err)
    })
  })

router.route('/:id/edit')
.get((req, res) => {
  return res.send("Get Users '/:id/edit' smoke test.")
})

module.exports = router;