import { cities as CITIES } from '../../db/seeds/data/city';
import { cityService } from '../../src/services/city.service';

describe('unit test city service', () => {
    test('list cities', async() => {
        const cities = await cityService.listCities();
        return expect(cities.length).toBe(342);
    })

    test('get city by  id', async() => {
        const id = '1';
        const city = await cityService.getCity(id);
        return expect(city.name).toEqual('北京市');
    })
});