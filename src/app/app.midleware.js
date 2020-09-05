const config = require('../config/config');

/**
 * Middleware to add default values to the locals for the templates
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const appMiddleware = (req, res, next) => {
    res.locals.base = config.base || '/';
    return next();
};

module.exports = appMiddleware;
