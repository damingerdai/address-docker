import Router from 'koa-router';
import { ProvinceHandler } from '../handlers/province.handler';

const routes = new Router();

routes.get('/api/v1/provinces', ProvinceHandler.listProvinces());

export const router = routes;