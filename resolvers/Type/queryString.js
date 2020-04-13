const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

module.exports = new GraphQLScalarType({
    name: 'QueryString',
    description: 'QueryString custom scalar type',
    parseValue(value) {
        return value
    },
    serialize(value) {
        return value
    },
    parseLiteral(ast) {
        if (
            ast.kind === Kind.STRING &&
            ast.value.trim().length > 0
        ) {
            return ast.value.trim()
        }
        return undefined
    },
})