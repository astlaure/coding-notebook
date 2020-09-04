const i18nextMiddleware = require('i18next-http-middleware');
const i18n = require('./i18n');

const i18nMiddleware = i18nextMiddleware.handle(i18n, {
    removeLngFromUrl: true,
});

module.exports = i18nMiddleware;
