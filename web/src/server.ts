import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { context } from './context';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

// const required = ['REPOSITORY_URL'];

// eslint-disabled: no-prototype-builtins
// const missing = required.filter(e => !process.env.hasOwnProperty(e));

// if (missing.length) {
// 	throw new Error(`Missing some required env variables: ${missing.join(',')}`);
// }

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
