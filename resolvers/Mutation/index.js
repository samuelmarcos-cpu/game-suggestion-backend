const poll = require('./poll')
const vote = require('./vote')
const user = require('./user')

module.exports = {
  ...poll,
  ...vote,
  ...user
}
