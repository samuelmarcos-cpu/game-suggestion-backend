exports.up = function (knex) {
  return knex.schema
    .createTable('restrict_genre', table => {
      table.increments('id').primary()
      table
        .integer('genre')
        .unsigned()
        .notNull()
      table
        .integer('poll_id')
        .unsigned()
        .notNull()
      table
        .foreign('poll_id')
        .references('poll.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.unique(['genre', 'poll_id'])
    })
    .then(function () {
      return knex('restrict_genre').insert([
        {
          poll_id: 1,
          genre: 7
        },
        {
          poll_id: 1,
          genre: 5
        },
        {
          poll_id: 2,
          genre: 31
        }
      ])
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('restrict_genre')
}
