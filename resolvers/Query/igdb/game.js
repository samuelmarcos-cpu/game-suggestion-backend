const db = require('../../../config/db')
const { formatFields, query: queryApi } = require('../../utils')

module.exports = {
  async SearchGames (_, { poll, query }) {
    async function restrictionsIds (poll, name) {
      const where = { poll_id: poll }
      const restrict_table = await db(`restrict_${name}`).where(where)
      return restrict_table.map(restriction => restriction[name])
    }

    let where = ''

    const platforms = await restrictionsIds(poll, 'platform')
    if (platforms.length > 0) {
      where += `platforms = (${formatFields(platforms)})`
    }

    const genres = await restrictionsIds(poll, 'genre')
    if (genres.length > 0) {
      where += platforms.length > 0 ? ' & ' : ''
      where += `genres = (${formatFields(genres)})`
    }

    query = query.trim()
    const data = await queryApi(
      'games',
      ['name', 'cover.url', 'first_release_date'],
      {
        search: query.length > 0 ? `"${query}"` : '',
        where
      },
      20
    )
    return data.map(game => {
      return {
        id: game.id,
        name: game.name,
        image: game.cover ? game.cover.url : null,
        year: game.first_release_date
          ? new Date(game.first_release_date * 1000).getFullYear()
          : null
      }
    })
  }
}
