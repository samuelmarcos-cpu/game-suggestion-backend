const poll = require('./poll')
const vote = require('./vote')

module.exports = {
    ...poll,
    ...vote
}