import { IContext } from 'src/types';
import { ProvinceService, IProvince } from 'src/service';

export const province = {
	Query: {
		provinces: (root: any, query: any, context: IContext) => {
			const provinceService = new ProvinceService();
			return provinceService.listProvinces();
		},

		province: (root: any, query: IProvince, context: IContext) => {
			const provinceService = new ProvinceService();
			return provinceService.getProvince(query.id);
		},
	},
};
