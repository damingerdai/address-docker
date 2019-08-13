import { HttpParam } from './request.type';

/**
 * 过滤器接口
 * @author arthur ming
 */
export interface Filter {
	/**
	 * 过滤器执行过程
	 * @param request http的请求请求对象
	 */
	doFilter(request: HttpParam): void;
}

/**
 * 基于责任链模式的过滤链，同时也实现了filter接口
 */
export class FilterChain implements Filter {
	/**
	 * 内部存放的过滤器的数组
	 */
	private filters: Filter[];

	/**
	 * 按照顺序依次执行过滤器
	 * @param request
	 */
	doFilter(request: HttpParam): void {
		if (this.filters && this.filters.length > 0) {
			this.filters.forEach(filter => filter.doFilter(request));
		}
	}

	/**
	 * 添加过滤器
	 * @param filters 过滤器数组
	 */
	addFilter(...filters: Filter[]): FilterChain {
		if (filters && filters.length > 0) {
			filters.forEach(filter => this.filters.push(filter));
		}
		return this;
	}

	/**
	 * 默认的构造函数
	 */
	constructor() {
		this.filters = [];
	}
}

export interface FilterAction {
	/**
	 * 添加过滤器
	 * @param filter 过滤器
	 */
	addFilter(filter: Filter): void;

	/**
	 * 批量添加过滤器
	 * @param filters 过滤器数组
	 */
	addFilters(...filters: Filter[]): void;
}
