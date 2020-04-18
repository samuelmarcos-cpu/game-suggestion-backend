const db = require('../../config/db')
const { formatFields, query } = require('../utils')

module.exports = {
  async platforms (poll) {
    const restrict_platform = await db('restrict_platform').where({
      poll_id: poll.id
    })

    if (restrict_platform.length === 0) {
      return restrict_platform
    }

    const platforms = restrict_platform.map(restrict => {
      return restrict.platform
    })
    ids = formatFields(platforms)

    const data = await query('platforms', ['name', 'platform_logo.url'], {
      where: `id = (${ids})`,
      limit: platforms.length
    })

    return data.map(platform => {
      return {
        name: platform.name,
        image: platform.platform_logo ? platform.platform_logo.url : null
      }
    })
  },
  async genres (poll) {
    const restrict_genre = await db('restrict_genre').where({
      poll_id: poll.id
    })

    if (restrict_genre.length === 0) {
      return restrict_genre
    }

    const genres = restrict_genre.map(restrict => {
      return restrict.genre
    })
    ids = formatFields(genres)
    return await query('genres', ['name'], {
      where: `id = (${ids})`,
      limit: genres.length
    })
  },
  votes (poll) {
    return db('vote').where({ poll_id: poll.id })
  }
}
