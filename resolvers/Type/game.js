const db = require('../../config/db')

module.exports = {
  votes (game) {
    return db('vote').where({
      game: game.id
    })
  }
}
