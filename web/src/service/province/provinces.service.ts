import { RequestService, HttpParam } from 'src/lib/request';
import { Provinces, IProvince } from '../province/provinces.type';

export class ProvinceService {
	private requestService: RequestService;

	constructor() {
		this.requestService = new RequestService();
		const doFilter = (request: HttpParam) => {
			request.url = (process.env.REPOSITORY_URL as string) + request.url;
		};
		const filter = { doFilter };
		this.requestService.addFilter(filter);
	}

	listProvinces(): Promise<Provinces> {
		return this.requestService.get<Provinces>({
			method: 'get',
			url: '/api/v1/provinces',
		});
	}

	getProvince(id: string): Promise<IProvince> {
		return this.requestService.get<IProvince>({
			method: 'get',
			url: `/api/v1/province/${id}`,
		});
	}
}
