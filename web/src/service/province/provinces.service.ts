import { RequestUtil } from 'src/lib/request.util';
import { Provinces } from '../province/provinces.type';


export class ProvinceService {

	listProvince(): Promise<Provinces> {
		const http: RequestUtil = new RequestUtil(process.env.REPOSITORY_URL as string + '/api/v1/provinces');
		return http.get<Provinces>();
	}
}
