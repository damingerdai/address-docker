import { IContext } from 'src/types';
import { ProvinceService } from 'src/service';

export const province = {
	Query: {
		provinces: (root: any, query: any, context: IContext) => {
			const provinceService = new ProvinceService();
			return provinceService.listProvince();
		},
	},
}
