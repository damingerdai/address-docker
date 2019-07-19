import { provinceService } from '../../src/services/province.service';

describe('unit test province service', () => {
    test('list provices', async () => {
        const provinces = await provinceService.listProvinces();
        return expect(provinces.length).toBe(31);
    })

    test('get province by id', async() => {
        const id = '1';
        const province = await provinceService.geProvince(id);
        return expect(province.name).toEqual('北京市');
    });
});