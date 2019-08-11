import { mergeTypes } from 'merge-graphql-schemas';

import { hello } from './hello';
import { books } from './book';

const schemas = [hello, books];

export const typeDefs = mergeTypes(schemas);
