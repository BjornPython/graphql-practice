const { users } = require("../testData")
const _ = require("lodash")
const resolvers = {
    Query: {
        users: () => {
            return users
        },
        user: (parent, args) => {
            const { id } = args
            const data = _.find(users, { id: Number(id) })
            return data
        },
    },
    User: {
        friends: () => {
            return "lel"
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            console.log(user);
            return user
        }
    }
}

module.exports = { resolvers }