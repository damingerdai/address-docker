import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { context } from './context';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
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
		port: 8443,
	},
	() => console.log('Running a GraphQL API server at localhost:8443/graphql')
);
