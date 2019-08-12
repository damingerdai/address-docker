import rp from 'request-promise';

export class RequestUtil {

	private url: string;

	get<T, P = {}>(params?: P): Promise<T> {
		const options  = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			qs: params || {},
			json: true
		}
		const p = (resolve: (value?: T) => void, reject: (reason: any) => void) => {
			rp.get(this.url, options)
				.then(res => {
					resolve(res as T);
				}).catch(err => reject(err));
		}
		return new Promise(p);
	}

	constructor(url: string) {
		this.url = url;
		if (!this.url) {
			throw new Error(`fail to init url`);
		}
	}
}
