import db from '../lib/db';
import { Provinces, IProvince } from '../types/province';

export const provinceService = {

    listProvinces(): Promise<Provinces> {
        return db.select('id', 'name').from('province');
    },

    geProvince(id: string): Promise<IProvince> {
        return db.select('id', 'name').from('province').where('id', id).first();;
    }
}