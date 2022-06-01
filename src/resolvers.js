const { dateScalar } = require('../src/schema')

const resolvers = {
    Query: {
        user:  (parent, { userId }, { dataSources: { userAPI } }, info) => userAPI.getUser({userId}),
        users: (parent, args, { dataSources: { userAPI } }, info) => userAPI.getUsers(),
        substances: (parent, { userId }, { dataSources: { userAPI } }, info) => userAPI.getSubstances({ userId }),
        doses: (parent, { userId }, { dataSources: { userAPI } }, info) => userAPI.getDoses({userId}),
    },
    Mutation: {
        login: (parent, args, context, info) => {},
        logout: (parent, args, context, info) => {},
        registerUser: (parent, args, context, info) => {},
        createDose: (parent, args, context, info) => {},
        editDose: (parent, args, context, info) => {},
        deleteDose: (parent, args, context, info) => {},
        createSubstance: (parent, args, context, info) => {},
        editSubstance: (parent, args, context, info) => {},
        deleteSubstance: (parent, args, context, info) => {},
    },
    Date: dateScalar
};

module.exports = resolvers