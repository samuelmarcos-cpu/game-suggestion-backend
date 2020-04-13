const db = require('../../config/db')

module.exports = {
    Poll(_, { poll }) {
        const id = poll
        if (id < 0) throw new Error('invalid parameter')
        return db('poll')
            .where({ id })
            .first()
    }
}