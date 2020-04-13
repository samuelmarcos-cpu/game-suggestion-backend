const axios = require('axios')
const { igdb } = require('../.env')

module.exports = axios.create({
    baseURL: "https://api-v3.igdb.com",
    headers: {
        'Accept': 'application/json',
        'user-key': igdb['user-key']
    }
})