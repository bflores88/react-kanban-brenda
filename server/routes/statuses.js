const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    return res.status(200).send('Show list of current statuses')
  })

router.route('/new')
.get((req, res) => {
  return res.status(200).send('Show form to add new Status')
})

router.route('/:id/edit')
.get((req, res) => {
  return res.status(200).send('Show form to update selected Status')
})

module.exports = router;