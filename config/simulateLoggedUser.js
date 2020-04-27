const db = require('../config/db')
const { getLoggedUser } = require('../resolvers/comum/user')

module.exports = async req => {
  const user = await db('user')
    .where({ nick: 'rapojim' })
    .first()

  if (user === undefined) return

  const { token } = getLoggedUser(user)

  req.headers = {
    authorization: `Bearer ${token}`
  }
}
