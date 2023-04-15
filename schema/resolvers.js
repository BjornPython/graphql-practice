const {users} = require("../testData")

const resolvers = {
    Query: {
        users() {
            return users
        }   
    }
}

module.exports = {resolvers}