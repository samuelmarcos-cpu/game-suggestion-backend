const db = require('../../config/db')
const bcrypt = require('bcrypt-nodejs')
const { getLoggedUser } = require('../comum/user')

const table = 'user'

module.exports = {
  async newUser (_, { nick, password }) {
    const salt = bcrypt.genSaltSync()
    password = bcrypt.hashSync(password, salt)

    try {
      const [id] = await db(table).insert({ nick, password })

      const user = await db(table)
        .where({ id })
        .first()

      return getLoggedUser(user)
    } catch (e) {
      throw new Error(e.sqlMessage)
    }
  },
  async deleteUser (_, __, ctx) {
    ctx.validateUser()

    const result = await db(table)
      .where({ id: ctx.user.id })
      .delete()

    return result === 1
  },
  async alterUser (_, { nick, password }, ctx) {
    ctx.validateUser()

    const salt = bcrypt.genSaltSync()
    password = bcrypt.hashSync(password, salt)

    const filter = { id: ctx.user.id }

    try {
      await db(table)
        .where(filter)
        .update({ nick, password })
    } catch (e) {
      throw new Error(e.sqlMessage)
    }

    const user = await db(table)
      .where(filter)
      .first()

    return getLoggedUser(user)
  }
}
