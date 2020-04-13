const { search } = require('../../utils')

module.exports = {
  async SearchGames (_, { query }) {
    const data = await search(
      query,
      'games',
      ['name', 'cover.url', 'first_release_date'],
      20
    )
    const games = data.map(game => {
      return {
        id: game.id,
        name: game.name,
        image: game.cover ? game.cover.url : null,
        year: game.first_release_date
          ? new Date(game.first_release_date * 1000).getFullYear()
          : null
      }
    })
    return games
  }
}
