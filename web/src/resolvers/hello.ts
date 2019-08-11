import { IContext } from 'src/types';

export const hello = {
	Query: {
		hello: (root: any, query: any, context: IContext): string => {
			return 'hello world';
		},
	},
};
