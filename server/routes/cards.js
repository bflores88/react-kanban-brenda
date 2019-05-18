const express = require('express');
const router = express.Router();
const Card = require('../database/models/Card');

router
  .route('/')
  .get((req, res) => {
    Card.forge()
      .orderBy('priority_id', 'ASC')
      .fetchAll({ withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'] })
      .then((results) => {
        let cardArray = results.toJSON();
        return res.json(cardArray);
      })
      .catch((err) => {
        console.log('err', err);
      });
  })
  .post((req, res) => {
    new Card({
      title: req.body.title,
      body: req.body.body,
      priority_id: req.body.priority_id,
      status_id: req.body.status_id,
      created_by: req.body.created_by,
      assigned_to: req.body.assigned_to,
    })
      .save()
      .then((result) => {
        return Card.where({ id: result.id })
          .fetch({ withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'] })
          .then((results) => {
            let cardArray = results.toJSON();
            return res.json(cardArray);
          })
          .catch((err) => {
            console.log('err', err);
          });
      })
      .catch((err) => {
        console.log('error', err);
      });
  })
  .delete((req, res) => {
    Card.where({ id: req.body.id })
      .destroy()
      .then((result) => {
        return Card.forge()
          .orderBy('priority_id', 'ASC')
          .fetchAll({ withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'] })
          .then((results) => {
            let cardArray = results.toJSON();
            return res.json(cardArray);
          })
          .catch((err) => {
            console.log('err', err);
          });
      })
      .catch((err) => {
        console.log('error', err);
      });
  });

router.route('/new').get((req, res) => {
  res.send('Will show form for new card.');
});

router.route('/:id').put((req, res) => {
  new Card({ id: req.params.id })
    .save({
      title: req.body.title,
      body: req.body.body,
      priority_id: req.body.priority_id,
      status_id: req.body.status_id,
      created_by: req.body.created_by,
      assigned_to: req.body.assigned_to,
    })
    .then((result) => {
      return Card.where({ id: result.id })
      .fetch({ withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'] })
      .then((results) => {
        let cardArray = results.toJSON();
        return res.json(cardArray);
      })
      .catch((err) => {
        console.log('err', err);
      });
    })
    .catch((err) => {
      console.log('error', err);
    });
});

router.route('/:id/edit').get((req, res) => {
  res.send('Form to edit cards');
});

router.route('/:id/delete').get((req, res) => {
  res.send('Form to delete cards');
});

module.exports = router;
