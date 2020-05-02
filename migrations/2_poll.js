exports.up = function (knex) {
  return knex.schema
    .createTable('poll', table => {
      table.increments('id').primary()
      table.string('question').notNull()
      table
        .datetime('date')
        .notNull()
        .defaultTo(knex.fn.now())
      table.integer('created_by').unsigned()
      table
        .foreign('created_by')
        .references('user.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .then(function () {
      return knex('poll').insert([
        {
          question: 'Qual é o melhor jogo 2D do Sonic?',
          date: '2020-03-20 00:00:00'
        },
        {
          question: 'Melhor Assassins Creed',
          date: '2020-03-21 00:00:00'
        }
      ])
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('poll')
}
