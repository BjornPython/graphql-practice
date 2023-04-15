const {users} = require("../testData")
const _ = require("lodash")
const resolvers = {
    Query: {
        users: () => {
            return users
        },
        user: (parent, args) => {
            const {id} = args
            const data = _.find(users,{id: Number(id)})
            return data
        }   
    }
}   

module.exports = {resolvers}