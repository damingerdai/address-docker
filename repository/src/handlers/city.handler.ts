import { Context } from 'koa';

import { RestKoaContext } from '../types/ctx';
import { cityService } from '../services/city.service';

export const CityHandler = {
    
    listCities: () => {
        return async(ctx: Context) => {
            const cities = await cityService.listCities();
            return ctx.rest(cities);
        }
    },

    getCity: () => {
        return async(ctx: Context) => {
            const id = ctx.params.id;
            const city = await cityService.getCity(id);
            return ctx.rest(city);
        }
    }
}