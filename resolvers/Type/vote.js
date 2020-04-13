const db = require('../../config/db')

module.exports = {
    option: (vote) => db('option').where({ id: vote.option_id }).first()
}