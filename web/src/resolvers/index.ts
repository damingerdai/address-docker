import { mergeResolvers } from 'merge-graphql-schemas';

import { books } from './book';
import { hello } from './hello';
import { province } from './province';

const resolversArr = [books, hello, province];

export const resolvers = mergeResolvers(resolversArr as any[]);
