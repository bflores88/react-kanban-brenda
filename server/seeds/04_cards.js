
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: "Test Card 1",
          body: "Description of test card 1.",
          priority_id: 1,
          status_id: 1,
          created_by: 1,
          assigned_to: 2
        },
        {
          title: "Test Card 2",
          body: "Description of test card 2.",
          priority_id: 2,
          status_id: 1,
          created_by: 1,
          assigned_to: 3
        },
        {
          title: "Test Card 3",
          body: "Description of test card 3.",
          priority_id: 3,
          status_id: 1,
          created_by: 2,
          assigned_to: 4
        },
        {
          title: "Test Card 4",
          body: "Description of test card 4",
          priority_id: 4,
          status_id: 2,
          created_by: 5,
          assigned_to: 3
        },
        {
          title: "Test Card 5",
          body: "Description of test card 5",
          priority_id: 2,
          status_id: 2,
          created_by: 4,
          assigned_to: 5
        },
        {
          title: "Test Card 6",
          body: "Description of test card 6",
          priority_id: 1,
          status_id: 3,
          created_by: 1,
          assigned_to: 2
        },
      ]);
    });
};
