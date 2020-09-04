const hbs = require('hbs');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const i18nHelperMiddleware = (req, res, next) => {
    hbs.registerHelper('t', (key) => {
        const result = req.t(key);

        return new hbs.handlebars.SafeString(result);
    });
    return next();
};

module.exports = i18nHelperMiddleware;
