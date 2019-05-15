
exports.up = function(knex, Promise) {
  return knex.schema.createTable('priorities', (table) => {
    table.increments();
    table.string('name', 50).notNullable();
    table.integer('rank').unsigned().notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('priorities');
};