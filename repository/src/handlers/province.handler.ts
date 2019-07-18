import { Context } from 'koa';

import { provinceService } from '../services/province.service';

export const ProvinceHandler = {

    listProvinces: () => {
        return  async (ctx: Context, next: Promise<any>) => {
            const provinces = await provinceService.listProvinces();
    
            ctx.response.type = 'application/json';
            ctx.response.body =  provinces;
        }
    }
}