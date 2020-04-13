const Query = require('./Query')
const Mutation = require('./Mutation')

const Date = require('./Type/date')

const Poll = require('./Type/poll')
const Vote = require('./Type/vote')
const Game = require('./Type/game')

module.exports = {
  Query,
  Mutation,

  Date,

  Poll,
  Vote,
  Game
}
