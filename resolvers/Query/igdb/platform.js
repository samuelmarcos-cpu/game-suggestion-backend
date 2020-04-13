const api = require('../../utils')

module.exports = {
  async SearchPlatforms (_, { query }) {
    const data = await api.search(
      query,
      'platforms',
      ['name', 'platform_logo.url'],
      20
    )
    const platforms = data.map(platform => {
      return {
        id: platform.id,
        name: platform.name,
        image: platform.platform_logo ? platform.platform_logo.url : null
      }
    })
    return platforms
  }
}
