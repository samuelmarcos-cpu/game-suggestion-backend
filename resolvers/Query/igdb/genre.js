const { query } = require('../../utils')

module.exports = {
  Genres () {
    return query('genres', ['name'])
  }
}
