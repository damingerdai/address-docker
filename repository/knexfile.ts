import { camelCase, snakeCase } from './src/lib/changeCase';

const environment = process.env.NODE_ENV || 'development';
const dbName = process.env.MYSQL_DB_NAME || 'address';


const specialChars = ['*'];

const convertToCase = (val: any, func: (data: any) => any) => {
	if (specialChars.includes(val)) return val;

	return func(val);
};

const configuration = {
    asyncStackTraces: process.env.STACKTRACES_ENABLED === 'true' || false,
    charset: 'utf-8',
    client: 'mysql',
    debug: process.env.DEBUG || false,
    pool: {
        min: process.env.MYSQL_POOL_MIN || 2,
        max: process.env.MYSQL_POOL_MAX || 100,
        bailAfter: 3 * 1000
    },
    connection: {
        host: process.env.MYSQL_HOST || 'db',
        port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT, 10) : 3306,
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '267552',
        database: process.env.NODE_ENV === 'test' ? `${dbName}_test` : dbName
    },
    migrations: {
        directory: 'db/migrations'
    },
    seeds: {
		directory: 'db/seeds'
    },
    postProcessResponse: (result: any, queryContext: any) => convertToCase(result, camelCase),
	wrapIdentifier: (value: any, origImpl: (arg0: any) => void, queryContext: any) => origImpl(convertToCase(value, snakeCase))
}

module.exports = configuration;
module.exports[environment] = configuration;