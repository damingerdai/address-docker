import rp from 'request-promise';

import { FilterChain, FilterAction, Filter } from './request.filter';
import { HttpParam } from './request.type';

export class RequestService implements FilterAction {
	private filterChain: FilterChain;

	addFilter(filter: Filter): void {
		if (filter) {
			this.filterChain.addFilter(filter);
		}
	}
	addFilters(...filters: Filter[]): void {
		if (filters && filters.length > 0) {
			filters.forEach(filter => this.filterChain.addFilter(filter));
		}
	}

	get<T>(request: HttpParam): Promise<T> {
		this.filterChain.doFilter(request);
		const options = {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			},
			qs: request.params || {},
			json: true,
		};
		const p = (resolve: (value?: T) => void, reject: (reason: any) => void) => {
			rp.get(request.url, options)
				.then(res => {
					resolve(res as T);
				})
				.catch(err => reject(err));
		};
		return new Promise(p);
	}

	constructor(chain: FilterChain = new FilterChain()) {
		this.filterChain = chain;
	}
}
