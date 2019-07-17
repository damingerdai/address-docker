import db from '../lib/db';
import { Provinces } from '../types/province';

export const provinceService = {

    listProvinces(): Promise<Provinces> {
        return db.select('id', 'name').from('province');
    }
}