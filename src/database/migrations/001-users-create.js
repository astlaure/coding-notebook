/* eslint-disable import/prefer-default-export */
const { DataTypes } = require('sequelize');

module.exports = {
    /** @param {import('sequelize').QueryInterface} queryInterface */
    up: async (queryInterface) => {
        await queryInterface.createTable('users', {
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
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        });
    },
    /** @param {import('sequelize').QueryInterface} queryInterface */
    down: async (queryInterface) => {
        await queryInterface.dropTable('users');
    },
};
