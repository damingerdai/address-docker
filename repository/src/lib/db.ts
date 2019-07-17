import knex, { Config } from 'knex';
import options from '../config/config';

export default knex(options.db as Config);