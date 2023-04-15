const {gql} = require("apollo-server")

const typeDefs = gql`

    type User {
        name: String!
        userName: String!
        age: Int!
        nationality: String!
    }

    type Query {
        getUsers: [User!]!
    }



`
