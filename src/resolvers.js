const { dateScalar } = require('../src/schema')

const resolvers = {
    Query: {
        getSubstances: (parent, args, context, info) => {},
        getDoses: (parent, args, context, info) => {},
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