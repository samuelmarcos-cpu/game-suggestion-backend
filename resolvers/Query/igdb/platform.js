const { query: queryApi } = require('../../utils')

module.exports = {
  async SearchPlatforms (_, { query }) {
    query = query.trim()
    const data = await queryApi(
      'platforms',
      ['name', 'platform_logo.url'],
      { search: query.length > 0 ? `"${query}"` : '' },
      20
    )
    return data.map(platform => {
      return {
        id: platform.id,
        name: platform.name,
        image: platform.platform_logo ? platform.platform_logo.url : null
      }
    })
  }
}
