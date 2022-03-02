const { gql } = require('apollo-server');
const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = gql`
    scalar Date

    ############# Models/Types ###########
    type User {
        id: ID!
        username: String!
        lastLogin: Date!
        doses: [Dose]
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Dose {
        id: ID!
        user: User!
        substance: Substance!
        takenAt: Date!
        createdAt: Date!
        updatedAt: Date!
    }    
    
    type Substance {
        id: ID!
        name: String!
        image: String
        user: User
        createdAt: Date!
        updatedAt: Date!
    }
    ######################################
    
    
    ##########  Response Types  ##########
    type SubstanceCreateResponse {
        success: Boolean!
        message: String
        substance: Substance
    }

    type UserCreateResponse {
        success: Boolean!
        message: String
        user: User
    }

    type DoseCreateResponse {
        success: Boolean!
        message: String
        dose: Dose
    }
    ######################################
    
    
    
    ########  Queries/Mutations ##########
    type Query {
        getSubstances(userId: ID): [Substance]
        getDoses(userId: ID!): [Dose]
    }
    
    type Mutation {
        login(username: String): User
        createDose(userId: ID!, substanceId: ID!): DoseCreateResponse!
        createUser(username: String): UserCreateResponse!
    }
    ######################################

`;

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
        return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
        }
        return null; // Invalid hard-coded value (not an integer)
    },
});


module.exports = {
    typeDefs,
    dateScalar
}