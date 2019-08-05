import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		settings: {
			'editor.theme': 'dark',
			'editor.cursorShape': 'line',
		},
	},
});

const app = express();

server.applyMiddleware({
	app,
});

app.listen(
	{
		port: 4000,
	},
	() => console.log('Running a GraphQL API server at localhost:4000/graphql')
);
