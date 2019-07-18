import Router from 'koa-router';
import { ProvinceHandler } from '../handlers/province.handler';
import { provinceService } from '../services/province.service';
import { Context } from 'koa';

const routes = new Router();

routes.get('/api/v1/provinces', async (ctx: Context, next: () => Promise<any>) => {
    const provinces = await provinceService.listProvinces();

    ctx.response.type = 'application/json';
    ctx.response.body =  provinces;
})

export const router = routes;