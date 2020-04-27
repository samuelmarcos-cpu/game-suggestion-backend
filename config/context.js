const jwt = require('jwt-simple')

module.exports = async ({ req }) => {
  await require('./simulateLoggedUser')(req)

  const auth = req.headers.authorization
  const token = auth && auth.substring(7)

  let user = null

  if (token) {
    try {
      let contentToken = jwt.decode(token, process.env.APP_AUTH_SECRET)
      if (new Date(contentToken.exp * 1000) > new Date()) {
        user = contentToken
      }
    } catch (e) {
      // token inválido
    }
  }

  return {
    user,
    validateUser () {
      if (!user) throw new Error('Acesso negado!')
    }
  }
}
