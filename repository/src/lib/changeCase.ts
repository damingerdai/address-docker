import * as _ from 'lodash';

import { isArray } from '../lib/arrays';

const transform = (data: any, func: (data: any) => any): any => {
    if (!data) {
        return data;
    } else if (isArray(data)) {
        return (data as any[]).map(elem => transform(elem, func));
    } else if (typeof data === 'object') {
        return _.mapKeys(data, (value, key) => transform(key, func));
    } else {
        return func(data);
    }
}

export const camelCase = (data: any) => {
	return transform(data, _.camelCase);
};

export const snakeCase = (data: any) => {
	return transform(data, _.snakeCase);
};
