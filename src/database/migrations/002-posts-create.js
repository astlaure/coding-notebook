/* eslint-disable import/prefer-default-export */
const { DataTypes } = require('sequelize');

module.exports = {
    /** @param {import('sequelize').QueryInterface} queryInterface */
    up: async (queryInterface) => {
        await queryInterface.createTable('posts', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            creationDate: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            topic: {
                type: DataTypes.ENUM('ARCHITECTURE', 'CSS', 'JAVASCRIPT', 'JAVA', 'PHP'),
                allowNull: false,
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: false,
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
        await queryInterface.dropTable('posts');
    },
};
