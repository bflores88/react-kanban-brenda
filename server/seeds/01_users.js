
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Ginger', last_name: 'Spice', email: 'gingerspice@devleague.com'},
        {first_name: 'Baby', last_name: 'Spice', email: 'babyspice@devleague.com'},
        {first_name: 'Scary', last_name: 'Spice', email: 'scaryspice@devleague.com'},
        {first_name: 'Posh', last_name: 'Spice', email: 'poshspice@devleague.com'},
        {first_name: 'Sporty', last_name: 'Spice', email: 'sportyspice@devleague.com'}
      ]);
    });
};
