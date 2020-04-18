const { ApolloServer } = require("apollo-server")
const { importSchema } = require("graphql-import")

const resolvers = require('./resolvers')
const typeDefs = importSchema('./schema/index.graphql')
// const context = require('./config/context')

const server = new ApolloServer({
    typeDefs,
    resolvers
    // context
})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})