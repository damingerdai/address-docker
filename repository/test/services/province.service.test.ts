import { provinceService } from '../../src/services/province.service';

describe('unit test province service', () => {
    test('list provices', async () => {
        expect.assertions(1);
        const provinces = await provinceService.listProvinces();
        return expect(provinces.length).toBe(31);
    })
});