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
  formatFields,
  async hasIGDB (itens, endpoint) {
    ids = formatFields(itens)
    const { data } = await axios.post(
      endpoint,
      `fields id; where id = (${ids});`
    )
    return itens.length === data.length
  },
  async query (endpoint, fields, conditions) {
    fields = formatFields(fields)

    let comp = ''
    for (let tag in conditions) {
      const condition = conditions[tag].toString()
      if (condition.length > 0) {
        comp += `${tag} ${condition};`
      }
    }

    const raw = `fields ${fields};${comp}`
    const { data } = await axios.post(endpoint, raw)
    return data
  }
}
