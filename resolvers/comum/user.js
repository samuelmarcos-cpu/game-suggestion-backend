const jwt = require('jwt-simple')

module.exports = {
  getLoggedUser (user) {
    const now = Math.floor(Date.now() / 1000)

    const userInfo = {
      id: user.id,
      nick: user.nick,
      iat: now,
      exp: now + 3 * 24 * 60 * 60
    }

    return {
      ...userInfo,
      token: jwt.encode(userInfo, process.env.APP_AUTH_SECRET)
    }
  }
}
