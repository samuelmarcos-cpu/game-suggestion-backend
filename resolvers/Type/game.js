const db = require('../../config/db')

module.exports = {
    options: (game) => db('option').where({ game: game.id })
}