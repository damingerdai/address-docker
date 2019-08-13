import { RequestService, HttpParam } from 'src/lib/request';
import { Provinces } from '../province/provinces.type';

export class ProvinceService {

	private requestService: RequestService;

	constructor() {
		this.requestService = new RequestService();
		const doFilter = (request: HttpParam) => {
			request.url = (process.env.REPOSITORY_URL as string) + request.url;
		}
		const filter = { doFilter };
		this.requestService.addFilter(filter);
	}

	listProvince(): Promise<Provinces> {
		return this.requestService.get<Provinces>(
			{
				method: 'get',
				url: '/api/v1/provinces'
			});
	}
}
