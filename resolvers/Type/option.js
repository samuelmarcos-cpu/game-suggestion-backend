const db = require('../../config/db')
const axios = require('../../config/axios')

module.exports = {
    poll: (option) => db('poll').where({ id: option.poll_id }).first(),
    async game(option) {
        const { data } = await axios.post("games",
            `fields name, cover.url, first_release_date;
                where id = ${option.game};
                sort name asc;`
        )
        const [game] = data
        const dateGame = new Date(game['first_release_date'] * 1000)
        const year = dateGame.getFullYear()
        return {
            id: game.id,
            name: game.name,
            image: game.cover ? game.cover.url : null,
            year
        }
    },
    votes(option) {
        return db('vote')
            .where({
                'option_id': option.id,
            })
    }
}