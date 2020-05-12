const db = require('../../config/db')
const { hasIGDB } = require('../utils')

module.exports = {
  async Vote (_, { poll, game }, ctx) {
    if (!(await hasIGDB([game], 'games'))) {
      throw new Error('One of the games does not exist')
    }
    const [id] = await db('vote')
      .insert({
        game,
        poll_id: poll,
        created_by: ctx.user && ctx.user.id
      })
      .returning('id')
    return db('vote')
      .where({ id })
      .first()
  }
}
