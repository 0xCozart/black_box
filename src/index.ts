import { POSTGRES_DBNAME, POSTGRES_PASSWORD, POSTGRES_USER } from "./constants";

import { ApolloServer } from "@apollo/server";
import { Sequelize } from "sequelize";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

try {
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  const seq = new Sequelize(
    `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost.com:5432/${POSTGRES_DBNAME}`
  );
  console.log("🚀 ~ file: index.ts:53 ~ seq:", seq);

  console.log(`🚀  Server ready at: ${url}`);
} catch (error) {}
