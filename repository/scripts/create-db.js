'use strict';

const config = require('../knexfile.ts');

const { connection: { database } } = config;
delete config.connection.database;
const knex = require('knex')(config);

knex.raw(`CREATE DATABASE ${database}`).finally(() => knex.destroy())
knex.raw(`ALTER DATABASE  ${database} CHARACTER SET utf8 COLLATE utf8_general_ci;`)

