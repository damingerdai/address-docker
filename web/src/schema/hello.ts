import gql from 'graphql-tag';

export const hello = gql`
	"query api"
	type Query {
		"""
		hello
		"""
		hello: String
	}
`;
