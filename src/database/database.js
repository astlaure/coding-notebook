const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database.config');
const config = require('../config/config');

const database = new Sequelize(databaseConfig[config.env]);

module.exports = database;
