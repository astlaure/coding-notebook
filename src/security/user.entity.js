const { DataTypes, Model } = require('sequelize');
const database = require('../database/database');

/** @type {import('sequelize').ModelAttributes} */
const userSchema = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('USER', 'ADMIN'),
        defaultValue: 'USER',
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
};

class User extends Model {}

User.init(userSchema, {
    sequelize: database,
    tableName: 'users',
});

module.exports = User;
