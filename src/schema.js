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
        amount: Int
        unit: String
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
    type SubstanceResponse {
        success: Boolean!
        message: String
        substance: Substance
    }

    type UserResponse {
        success: Boolean!
        message: String
        user: User
    }

    type DoseResponse {
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
        login(username: String): UserResponse!
        logout: UserResponse!
        registerUser(username: String): UserResponse!

        createDose(
            userId: ID!
            substanceId: ID!
            amount: Int
            unit: String
            ): DoseResponse!
        editDose(
            doseId: ID!
            substanceId: ID
            takenAt: Date
            amount: Int
            unit: String
            ): DoseResponse! 
        deleteDose(doseId: ID!): DoseResponse!

        createSubstance(
            userId: ID!
            name: String!
            image: String
            ): SubstanceResponse!
        editSubstance(
            substanceId: ID!
            name: String
            image: String
            ): SubstanceResponse!
        deleteSubstance(substanceId: ID!): SubstanceResponse! 
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