const db = require('../../config/db')

module.exports = {
    options(poll) {
        return db('option')
            .where({ poll_id: poll.id })
    }
}