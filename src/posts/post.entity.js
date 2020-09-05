const { DataTypes, Model } = require('sequelize');
const database = require('../database/database');

/** @type {import('sequelize').ModelAttributes} */
const postSchema = {
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
};

class Post extends Model {}

Post.init(postSchema, {
    sequelize: database,
    tableName: 'posts',
});

module.exports = Post;
