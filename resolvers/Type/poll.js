const db = require('../../config/db')
const { query } = require('../utils')

module.exports = {
  async platforms (poll) {
    const restrict_platform = await db('restrict_platform').where({
      poll_id: poll.id
    })
    const platforms = restrict_platform.map(restrict => {
      return restrict.platform
    })
    console.log(platforms)
    const data = query(
      'platforms',
      ['name', 'platform_logo.url'],
      { id: platforms },
      platforms.length
    )
    console.log(data)
  },
  votes (poll) {
    return db('vote').where({
      poll_id: poll.id
    })
  }
}
