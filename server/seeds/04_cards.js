
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: "Tell me what you want.",
          body: "Yo I'll tell you what I want, what I really really want.  So tell me what you want, what you really really want.",
          priority_id: 1,
          status_id: 1,
          created_by: 1,
          assigned_to: 2
        },
        {
          title: "Forget my past.",
          body: "If you want my future, forget my past.",
          priority_id: 2,
          status_id: 1,
          created_by: 1,
          assigned_to: 3
        },
        {
          title: "Better make it fast.",
          body: "If you want to get with me, you better make it fast.",
          priority_id: 3,
          status_id: 1,
          created_by: 2,
          assigned_to: 4
        },
        {
          title: "Get your act together.",
          body: "Now don't go wasting my precious time. Get your act together we will be just fine.",
          priority_id: 4,
          status_id: 2,
          created_by: 5,
          assigned_to: 3
        },
        {
          title: "Get with my friends.",
          body: "If you wannabe my lover, you gotta get with my friends.  Make it last forever, friendship never ends.",
          priority_id: 3,
          status_id: 2,
          created_by: 4,
          assigned_to: 1
        },
        {
          title: "You have got to give.",
          body: "If you wannabe my lover, you have got to give.  Taking is too easy, but that's the way it is.",
          priority_id: 2,
          status_id: 2,
          created_by: 4,
          assigned_to: 5
        },
        {
          title: "Listen carefully.",
          body: "Now here's a story from a to z.  You want to get with me, you gotta listen carefully.",
          priority_id: 1,
          status_id: 3,
          created_by: 1,
          assigned_to: 2
        },
        {
          title: "Slam your body down.",
          body: "Slam your body down and wind it all around.  I really really really wanna zigazag ah.",
          priority_id: 4,
          status_id: 3,
          created_by: 1,
          assigned_to: 2
        },
      ]);
    });
};
