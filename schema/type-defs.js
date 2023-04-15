const {gql} = require("apollo-server")

const typeDefs = gql`

    type User {
        id: Int!
        name: String!
        age: Int!
        nationality: String!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
    }
`

module.exports = { typeDefs }