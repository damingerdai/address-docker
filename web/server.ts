import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql(`
    type Query {
        hello: String
    }
`);

const resolvers = {
    Query: {
        hello: () => 'Hello World',
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

server.applyMiddleware({
    app
});

app.listen({
    port: 4000
}, () => console.log('Running a GraphQL API server at localhost:4000/graphql'))

