import * as Knex from 'knex';
import { provinces } from './data/province';

const createTable = async (knex: Knex) => {
    await knex.raw('SET FOREIGN_KEY_CHECKS = 0');

    await knex.raw('DROP TABLE IF EXISTS province')
    await knex.schema.createTable('province', (table) => {
        table.increments('id');
        table.string('name');
        table.string('province_id');
    });

    await knex.raw('DROP TABLE IF EXISTS city');
    await knex.schema.createTable('city', (table) => {
        table.increments('id');
        table.string('name');
        table.string('city_id');
        table.string('province_id');
    });

    await knex.raw('DROP TABLE IF EXISTS country');
    await knex.schema.createTable('country', (table) => {
        table.increments('id');
        table.string('name');
        table.string('country_id');
        table.string('city_id');
    });

    await knex.raw('DROP TABLE IF EXISTS town');
    await knex.schema.createTable('town', (table) => {
        table.increments('id');
        table.string('name');
        table.string('town_id');
        table.string('country_id');
    });

    await knex.raw('DROP TABLE IF EXISTS village');
    await knex.schema.createTable('village', (table) => {
        table.increments('id');
        table.string('name');
        table.string('village_id');
        table.string('town_id');
    });
}

const seedProvince = async (knex: Knex) => {
    return knex('province').insert(provinces.map(province => {
        return {
            name: province.name,
            province_id: province.id
        }
    }));
}

export const seed = async (knex: Knex) => {
    await createTable(knex);

    await seedProvince(knex);
}

