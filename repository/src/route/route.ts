import Router from 'koa-router';
import { ProvinceHandler } from '../handlers/province.handler';
import { CityHandler } from '../handlers/city.handler';

const routes = new Router();

routes.get('/api/v1/provinces', ProvinceHandler.listProvinces());
routes.get('/api/v1/province/:id', ProvinceHandler.getProvince());

routes.get('/api/v1/cities', CityHandler.listCities());
routes.get('/api/v1/city/:id', CityHandler.getCity());

export const router = routes;