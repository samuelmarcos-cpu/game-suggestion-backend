const db = require('../../config/db')
const axios = require('../../config/axios')

async function hasGames (games) {
  let ids = games.reduce((prevVal, elem) => {
    return prevVal + elem.toString() + ', '
  }, '')
  ids = ids.slice(0, -2)
  const { data } = await axios.post(
    'games',
    `fields id; where id = (${ids}); limit 20;`
  )
  igdbIds = data.map(game => {
    return game.id
  })
  for (id of games) {
    if (igdbIds.indexOf(id) < 0) {
      return false
    }
  }
  return true
}

module.exports = {
  async CreatePoll (_, { question, games }) {
    // console.log(data)
    if (question && question.trim().length < 10) {
      throw new Error('Poll must be bigger than 10 character')
    }
    if (games.length < 2) {
      throw new Error('Must have at least 2 games')
    }
    if (games.length > 20) {
      throw new Error('No more than 20 games')
    }
    if (!(await hasGames(games))) {
      throw new Error('One of the games does not exist')
    }
    try {
      const q = await db.transaction(async trx => {
        const q = await trx('poll').insert({
          question: question
        })

        const gamesInsert = games.map(game => {
          return {
            poll_id: q[0],
            game
          }
        })
        await trx('option').insert(gamesInsert)

        return q
      })

      return await db('poll')
        .where({ id: q[0] })
        .first()
    } catch (error) {
      throw new Error(error)
    }
  }
}
