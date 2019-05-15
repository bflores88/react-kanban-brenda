const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    return res.status(200).send('Show list of current priorities')
  })

router.route('/new')
.get((req, res) => {
  return res.status(200).send('Show form to add new Priority')
})

router.route('/:id/edit')
.get((req, res) => {
  return res.status(200).send('Show form to update selected Priority')
})

module.exports = router;