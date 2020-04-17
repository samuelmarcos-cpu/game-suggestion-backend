const { search } = require('../../utils')

module.exports = {
  Genres () {
    return search('genres', ['name'])
  }
}
