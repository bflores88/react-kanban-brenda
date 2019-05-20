const bcrypt = require('bcryptjs');
const saltRounds = 12;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Ginger',
          password: bcrypt.hashSync('abc123', saltRounds),
          first_name: 'Ginger',
          last_name: 'Spice',
          email: 'gingerspice@devleague.com'
        },
        {
          username: 'Baby',
          password: bcrypt.hashSync('abc123', saltRounds),
          first_name: 'Baby',
          last_name: 'Spice',
          email: 'babyspice@devleague.com'
        },
        {
          username: 'Scary',
          password: bcrypt.hashSync('abc123', saltRounds),
          first_name: 'Scary',
          last_name: 'Spice',
          email: 'scaryspice@devleague.com'
        },
        {
          username: 'Posh',
          password: bcrypt.hashSync('abc123', saltRounds),
          first_name: 'Posh',
          last_name: 'Spice',
          email: 'poshspice@devleague.com'
        },
        {
          username: 'Sporty',
          password: bcrypt.hashSync('abc123', saltRounds),
          first_name: 'Sporty',
          last_name: 'Spice',
          email: 'sportyspice@devleague.com'
        }
      ]);
    });
};
