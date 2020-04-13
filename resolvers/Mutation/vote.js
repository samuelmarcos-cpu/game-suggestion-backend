const db = require('../../config/db')
const { hasIGDB } = require('../utils')

module.exports = {
  async Vote (_, { poll, game }) {
    if (!(await hasIGDB([game], 'games'))) {
      throw new Error('One of the games does not exist')
    }
    const result = await db('vote').insert({
      poll_id: poll,
      game
    })
    return db('vote')
      .where({
        id: result[0]
      })
      .first()
  }
}
