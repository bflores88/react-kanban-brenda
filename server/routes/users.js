'use strict';

const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    return res.send("Get Users '/' smoke test.")
  })

router.route('/new')
.get((req, res) => {
  return res.send("Get Users '/new' smoke test.")
})

router.route('/:id')
  .get((req, res) => {
    return res.send("Get Users '/:id' smoke test.")
  })

router.route('/:id/edit')
.get((req, res) => {
  return res.send("Get Users '/:id/edit' smoke test.")
})

module.exports = router;