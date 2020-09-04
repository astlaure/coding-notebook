require('dotenv').config();

const config = {
    port: process.env.SERVER_PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    secret: process.env.SECRET_KEY,
    base: process.env.BASE_PATH,
};

module.exports = config;
