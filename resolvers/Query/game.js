// const axios = require('axios')
const axios = require('../../config/axios')

module.exports = {
    async SearchGames(_, { query }) {
        if (query.trim().length <= 0) {
            throw new Error("Query is empty")
        }
        const { data } = await axios.post('games',
            `fields name, cover.url, first_release_date;
                search "${query}";
                limit 20;`
        )
        const games = data.map(game => {
            return {
                id: game.id,
                name: game.name,
                image: game.cover ? game.cover.url : null,
                year: game.first_release_date || null
            }
        })
        return games
    }
}