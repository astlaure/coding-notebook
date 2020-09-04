const path = require('path');
const i18next = require('i18next');
const i18nMiddleware = require('i18next-http-middleware');
const Backend = require('i18next-fs-backend');

i18next
    .use(i18nMiddleware.LanguageDetector)
    .use(Backend)
    .init({
        supportedLng: ['fr', 'en'],
        preload: ['en', 'fr'],
        fallbackLng: 'fr',
        debug: false,
        detection: {
            order: ['querystring', 'cookie'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: path.resolve(process.cwd(), 'resources/i18n/{{lng}}.json'),
        },
    });

module.exports = i18next;
