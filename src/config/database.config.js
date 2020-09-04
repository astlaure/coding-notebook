require('dotenv').config();

/** @type {Object.<string, import('sequelize').Options>} */
const configuration = {
    test: {
        storage: ':memory:',
        dialect: 'sqlite',
    },
    development: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
        pool: {
            min: 2,
            max: 10,
        },
    },
    production: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
        pool: {
            min: 2,
            max: 10,
        },
    },
};

module.exports = configuration;
