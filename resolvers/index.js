const Query = require('./Query')
const Mutation = require('./Mutation')

const Date = require('./Type/date')

const Poll = require('./Type/poll')
const Option = require('./Type/option')
const Game = require('./Type/game')
const Vote = require('./Type/vote')

module.exports = {
  Query,
  Mutation,

  Date,

  Poll,
  Option,
  Game,
  Vote
}
