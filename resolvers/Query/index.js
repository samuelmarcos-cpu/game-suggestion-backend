const poll = require('./poll')
const game = require('./game')

module.exports = {
  ...poll,
  ...game
}
