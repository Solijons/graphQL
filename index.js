const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const PORT = 4000;

const app = express();

const dataTypes = [{
    title: 'Developer',
    name: 'Solijon',
}];

const typeDefs = gql`
  type Types {
      title: String,
      name: String
  }
  type Query {
      dataTypes: [Types]
  } 
`;

const resolvers = {
  Query: {
    // hello: () => 'Hello world!',
    // solijon: () => 'Solijon is great developer'
    // id: () => 12,
    // title: () => 'Software Developer',
    // name: () => 'Solijon Sharipov'
    dataTypes: () => dataTypes,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.use()

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

