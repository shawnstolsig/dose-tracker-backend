require('dotenv').config()
const { ApolloServer} = require("apollo-server")

const { typeDefs } = require('./schema')
// const { createStore } = require('./util')
const sequelize = require('../models')
const resolvers = require('./resolvers')
const UserAPI = require('./datasources/user')

// const store = createStore()

const server = new ApolloServer({
    // context: async ({ req }) => {
    //     // simple auth check on every request
    //     const auth = req.headers && req.headers.authorization || '';
    //     const email = Buffer.from(auth, 'base64').toString('ascii');
    //     if (!isEmail.validate(email)) return { user: null };
    //     // find a user by their email
    //     const users = await store.users.findOrCreate({ where: { email } });
    //     const user = users && users[0] || null;
    //     return { user: { ...user.dataValues } };
    // },
    context: { sequelize },
    typeDefs,
    resolvers,
    dataSources: () => ({
        userAPI: new UserAPI({ store: sequelize })
    })
})

server.listen().then(() => console.log(`
    Dose Tracker API Server is running!
    Listening on port 4000
    https://studio.apollographql.com/sandbox
`))