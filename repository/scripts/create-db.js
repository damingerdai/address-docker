'use strict';

const config = require('../knexfile.ts');

const { connection: { database } } = config;
delete config.connection.database;

const knex = require('knex')(config)

knex.raw(`CREATE DATABASE ${database}`).finally(() => knex.destroy())

