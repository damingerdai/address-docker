import db from '../lib/db';
import { Cities, ICity } from '../types/city';

export const cityService = {

    listCities(): Promise<Cities> {
        return db.select('id', 'name', 'cityId', 'provinceId').from<Cities>('city');
    },

    getCity(id: string): Promise<ICity> {
        return db.select('id', 'name', 'cityId', 'provinceId').from<Cities>('city').where('id', id).first();
    }
}