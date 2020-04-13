const poll = require('./poll')
const platform = require('./igdb/platform')
const game = require('./igdb/game')

module.exports = {
  ...poll,
  ...platform,
  ...game
}
