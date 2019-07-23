import { Context } from 'koa';

import { RestKoaContext } from '../types/ctx';
import { provinceService } from '../services/province.service';

export const ProvinceHandler = {

    listProvinces: () => {
        return  async (ctx: Context, next: () => Promise<any>) => {
            const provinces = await provinceService.listProvinces();
            (ctx as RestKoaContext).rest(provinces);
        }
    },

    getProvince: () => {
        return async (ctx: Context, next: () => Promise<any>) => {
            const id = ctx.params.id;
            const province = await provinceService.geProvince(id);
            (ctx as RestKoaContext).rest(province);
        }
    }
}