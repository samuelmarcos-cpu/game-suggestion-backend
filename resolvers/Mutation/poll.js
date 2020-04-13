const db = require('../../config/db')
const { hasIGDB } = require('../utils')

module.exports = {
  async CreatePoll (_, { data }) {
    const question = data.question
    if (question && question.trim().length < 10) {
      throw new Error('Poll must be bigger than 10 character')
    }

    const platforms = data.platforms
    if (!(await hasIGDB(platforms, 'platforms'))) {
      throw new Error('One of the platforms does not exist')
    }

    const q = await db('poll').insert({
      question: question
    })
    const poll_id = q[0]

    await db('restrict_platform').insert(
      platforms.map(platform => {
        return {
          poll_id,
          platform
        }
      })
    )

    return await db('poll')
      .where({ id: poll_id })
      .first()
  }
}
