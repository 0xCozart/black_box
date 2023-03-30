const typeDefs = `#graphql
   enum QueryErrors {
       NOUSERFOUND
       USERALREADYEXISTS
   }

   union UserQueryResponse = User | QueryErrors

    type User {
        id: ID!
        username: String!
        evm_address: String
        authorized: Boolean!
    }

    type Query {
        getUser(username: String!): UserQueryResponse!
    }

    type Mutation {
        createUser(username: String!, evm_address: String): User!
        # not sure if evm_update and auth update should be seperate
        updateUser(username: String!, evm_address: String, athorized: Boolean): User!
    }
`;

export default typeDefs;
