const { gql } = require("apollo-server")

const typeDefs = gql`

    type Char {
        isCool: Boolean!
        isNice: Boolean!
    }

    type User {
        id: Int!
        name: String!
        age: Int!
        nationality: String!
        char: Char
        friends: String
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
    }
`

module.exports = { typeDefs }