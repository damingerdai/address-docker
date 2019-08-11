import { mergeResolvers } from 'merge-graphql-schemas';

import { hello } from './hello';
import { books } from './book';

const resolversArr = [hello, books];

export const resolvers = mergeResolvers(resolversArr);
