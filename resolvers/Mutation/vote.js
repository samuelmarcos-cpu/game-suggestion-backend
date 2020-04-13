const db = require('../../config/db')

module.exports = {
    async Vote(_, { option }) {
        const result = await db('vote').insert({
            option_id: option
        })
        return db('vote').where({
            id: result[0]
        }).first()
    }
}