const path = require('path');
const express = require('express');
const hbs = require('hbs');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const i18nextMiddleware = require('i18next-http-middleware');
const config = require('../config/config');
const security = require('../security/security');
const appRouter = require('./app.router');
const i18n = require('./app.i18n');
const securityRouter = require('../security/security.router');
const appMiddleware = require('./app.midleware');
const layoutHelper = require('../helpers/layout.helper');
const i18nHelper = require('../helpers/i18n.helper');
const markdownHelper = require('../helpers/markdown.helper');
const postRouter = require('../posts/post.router');
const photoMiddleware = require('../photos/photo.middleware');
const photoRouter = require('../photos/photo.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(process.cwd(), 'resources/views'));

hbs.registerPartials(path.resolve(process.cwd(), 'resources/views/partials'));
hbs.registerHelper('t', i18nHelper);
hbs.registerHelper('extend', layoutHelper.extendHelper);
hbs.registerHelper('block', layoutHelper.blockHelper);
hbs.registerHelper('markdown', markdownHelper);

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({ secret: config.secret }));
app.use(security.initialize());
app.use(security.session());
app.use(photoMiddleware.single('photo'));
app.use(csurf());

app.use(i18nextMiddleware.handle(i18n));
app.use(appMiddleware);

app.use(config.base, express.static(path.resolve(process.cwd(), 'public')));
app.use(`${config.base}/uploads`, express.static(path.resolve(process.cwd(), 'storage/uploads')));
app.use(config.base, appRouter);
app.use(config.base, securityRouter);
app.use(`${config.base}/posts`, postRouter);
app.use(`${config.base}/photos`, photoRouter);

module.exports = app;
