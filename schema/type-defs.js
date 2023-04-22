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

    input CreateUserInput {
        name: String = "Anonymous"
        age: Int = 0
        nationality: String = "Filipino"
        friends: String = "yes"
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
    }
`

module.exports = { typeDefs }