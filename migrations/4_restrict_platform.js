exports.up = function (knex) {
  return knex.schema
    .createTable('restrict_platform', table => {
      table.increments('id').primary()
      table
        .integer('platform')
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
      table.unique(['platform', 'poll_id'])
    })
    .then(function () {
      return knex('restrict_platform').insert([
        {
          poll_id: 1,
          platform: 33
        },
        {
          poll_id: 1,
          platform: 24
        }
      ])
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('restrict_platform')
}
