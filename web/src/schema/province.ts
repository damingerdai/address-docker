import gql from 'graphql-tag';

export const province = gql`
	type Province {
		id: String
		name: String
	}
	type Query {
		provinces: [Province]
	}
`;
