import { Request, Response } from 'express';

import { IContext } from './../types';

export const context = (request: Request, response: Response): IContext => {
	return {
		request,
		response,
	};
};
