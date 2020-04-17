const { search } = require('../../utils')

module.exports = {
  async SearchPlatforms (_, { query }) {
    const data = await search(
      'platforms',
      ['name', 'platform_logo.url'],
      query,
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
