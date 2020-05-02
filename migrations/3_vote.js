exports.up = function (knex) {
  return knex.schema
    .createTable('vote', table => {
      table.increments('id').primary()
      table
        .integer('game')
        .unsigned()
        .notNull()
      table
        .datetime('date')
        .notNull()
        .defaultTo(knex.fn.now())
      table
        .integer('poll_id')
        .unsigned()
        .notNull()
      table
        .foreign('poll_id')
        .references('poll.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('created_by').unsigned()
      table
        .foreign('created_by')
        .references('user.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .then(function () {
      return knex('vote').insert([
        {
          poll_id: 1,
          game: 6231,
          date: '2020-03-20 00:00:00'
        },
        {
          poll_id: 1,
          game: 38695,
          date: '2020-03-21 00:00:00'
        },
        {
          poll_id: 1,
          game: 129187,
          date: '2020-03-21 00:00:00'
        },
        {
          poll_id: 2,
          game: 8263,
          date: '2020-03-22 00:00:00'
        },
        {
          poll_id: 2,
          game: 127,
          date: '2020-03-23 00:00:00'
        },
        {
          poll_id: 2,
          game: 1266,
          date: '2020-03-23 00:00:00'
        }
      ])
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('vote')
}
