import Router from 'koa-router';
import { ProvinceHandler } from '../handlers/province.handler';

const routes = new Router();

routes.get('/api/v1/provinces', ProvinceHandler.listProvinces());
routes.get('/api/v1/province/:id', ProvinceHandler.getProvince());

export const router = routes;