import { Context } from 'koa';

import { RestKoaContext } from '../types/ctx';
import { provinceService } from '../services/province.service';

export const ProvinceHandler = {

    listProvinces: () => {
        return  async (ctx: Context, next: () => Promise<any>) => {
            const provinces = await provinceService.listProvinces();
            (ctx as RestKoaContext).rest(provinces);
        }
    }
}