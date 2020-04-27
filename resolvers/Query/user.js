const db = require('../../config/db')
const bcrypt = require('bcrypt-nodejs')
const { getLoggedUser } = require('../comum/user')

module.exports = {
  async Login (_, { nick, password }) {
    const user = await db('user')
      .where({ nick })
      .first()
    const error = new Error('Invalid Nick/Password')
    if (user === undefined) throw error

    const equals = bcrypt.compareSync(password, user.password)
    if (equals === false) throw error

    return getLoggedUser(user)
  }
}
