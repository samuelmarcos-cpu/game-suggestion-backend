require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')

const typeDefs = importSchema('./schema/index.graphql')
const resolvers = require('./resolvers')
const context = require('./config/context')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
