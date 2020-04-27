const poll = require('./poll')
const platform = require('./igdb/platform')
const genre = require('./igdb/genre')
const game = require('./igdb/game')
const user = require('./user')

module.exports = {
  ...poll,
  ...platform,
  ...genre,
  ...game,
  ...user
}
