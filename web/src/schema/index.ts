import { mergeTypes } from 'merge-graphql-schemas';

import { hello } from './hello';

const schemas = [hello];

export const typeDefs = mergeTypes(schemas);
