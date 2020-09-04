const path = require('path');
const express = require('express');
const hbs = require('hbs');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const config = require('../config/config');
const security = require('../security/security');
const appRouter = require('./app.router');
const securityRouter = require('../security/security.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(process.cwd(), 'resources/views'));

hbs.registerPartials(path.resolve(process.cwd(), 'resources/views/partials'));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({ secret: config.secret }));
app.use(security.initialize());
app.use(security.session());
app.use(csurf());

app.use(express.static(path.resolve(process.cwd(), 'public')));
app.use(appRouter);
app.use(securityRouter);

module.exports = app;
