
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {name: 'High', rank: 1},
        {name: 'Medium', rank: 2},
        {name: 'Low', rank: 3},
        {name: 'Blocker', rank: 4},
      ]);
    });
};
