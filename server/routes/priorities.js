'use strict';

const express = require('express');
const router = express.Router();
const Priority = require('../database/models/Priority');

router.route('/')
  .get((req, res) => {
    Priority
      .fetchAll()
      .then((result) => {
      return res.send(result.toJSON())
      })
      .catch((err) => {
      console.log('error', err)
    })
  })
  .post((req, res) => {
    new Priority({
      name: req.body.name,
      rank: req.body.rank
    })
      .save()
      .then((reuslt) => {
        return res.send('{ message: new priority successfully added! }')
      })
      .catch((err) => {
        console.log('error', err)
      })
  })

router.route('/new')
.get((req, res) => {
  return res.status(200).send('Show form to add new Priority')
})

router.route('/:id')
  .put((req, res) => {
    Priority
      .where({ id: req.params.id })
      .save({
        name: req.body.name,
        rank: req.body.rank
      })
      .then((result) => {
      return res.send('{ message: priority successfully updated!')
      })
      .catch((err) => {
        console.log('error', err)
      })
  })
  .delete((req, res) => {
    Priority
      .where({ id: req.params.id })
      .destroy()
      .then((result) => {
       return res.send('{ message: priority successfully deleted!} ')
      })
      .catch((err) => {
        console.log('error', err)
      })
  })

router.route('/:id/edit')
.get((req, res) => {
  return res.status(200).send('Show form to update selected Priority')
})

module.exports = router;