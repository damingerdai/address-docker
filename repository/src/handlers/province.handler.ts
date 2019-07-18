import { Context } from 'koa';

import { RestKoaContext } from '../types/ctx';
import { provinceService } from '../services/province.service';

export const ProvinceHandler = {

    listProvinces: () => {
        return  async (ctx: RestKoaContext, next: Promise<any>) => {
            const provinces = await provinceService.listProvinces();
            ctx.rest(provinces);
        }
    }
}