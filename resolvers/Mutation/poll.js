const db = require('../../config/db')
const { hasIGDB, formatFields, query } = require('../utils')

module.exports = {
  async CreatePoll (_, { data }, ctx) {
    const question = data.question
    if (question && question.trim().length < 10) {
      throw new Error('Poll must be bigger than 10 character')
    }

    let where = ''

    const platforms = data.platforms
    if (platforms.length > 0) {
      if (!(await hasIGDB(platforms, 'platforms'))) {
        throw new Error('One of the platforms does not exist')
      }
      where += `platforms = (${formatFields(platforms)})`
    }

    const genres = data.genres
    if (genres.length > 0) {
      if (!(await hasIGDB(genres, 'genres'))) {
        throw new Error('One of the genres does not exist')
      }
      where += platforms.length > 0 ? ' & ' : ''
      where += `genres = (${formatFields(genres)})`
    }

    if (where.length > 0) {
      const data = await query('games', ['id'], {
        where,
        limit: 2
      })
      if (data.length < 2) {
        throw new Error('there are too many restrictions')
      }
    }

    const [poll_id] = await db('poll').insert({
      question: question,
      created_by: ctx.user && ctx.user.id
    })
    // .returning('id')

    await db('restrict_platform').insert(
      platforms.map(platform => {
        return {
          poll_id,
          platform
        }
      })
    )

    await db('restrict_genre').insert(
      genres.map(genre => {
        return {
          poll_id,
          genre
        }
      })
    )

    return await db('poll')
      .where({ id: poll_id })
      .first()
  }
}
