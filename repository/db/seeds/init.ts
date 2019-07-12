import * as Knex from 'knex';

export const seed  = async (knex: Knex) => {
    await knex.raw('SET FOREIGN_KEY_CHECKS = 0');

    await knex.raw('DROP TABLE IF EXISTS province')
    await knex.schema.createTable('province', (table) => {
        table.increments('id ');
        table.string('name');
        table.string('province_id');
    });
}
