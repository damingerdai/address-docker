import { mergeResolvers } from 'merge-graphql-schemas';

import { hello } from './hello';

const resolversArr = [
	hello
]

export const resolvers = mergeResolvers(resolversArr);
