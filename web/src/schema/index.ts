import { mergeTypes } from 'merge-graphql-schemas';

import { books } from './book';
import { hello } from './hello';
import { province } from './province';

const schemas = [books, hello, province];

export const typeDefs = mergeTypes(schemas);
