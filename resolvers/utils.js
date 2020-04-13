const axios = require('../config/axios')

function formatFields (fields) {
  return fields
    .reduce((str, field) => {
      return str + field + ', '
    }, '')
    .slice(0, -2)
}

function validateQuery (query) {
  if (query.trim().length <= 0) {
    throw new Error('Query is empty')
  }
}

module.exports = {
  async hasIGDB (itens, endpoint) {
    ids = formatFields(itens)
    const { data } = await axios.post(
      endpoint,
      `fields id; where id = (${ids});`
    )
    return itens.length === data.length
  },
  async query (endpoint, fields, where, limit) {
    fields = formatFields(fields)
    where = where.reduce((str, c) => {}, '') // resolver isso
    const raw = `fields ${fields};
  search "${query}";
  where "${where}";
  limit ${limit};`
    const { data } = await axios.post(endpoint, raw)
    return data
  },
  async search (query, endpoint, fields, limit) {
    validateQuery(query)
    fields = formatFields(fields)
    const raw = `fields ${fields};
  search "${query}";
  limit ${limit};`
    const { data } = await axios.post(endpoint, raw)
    return data
  }
}
