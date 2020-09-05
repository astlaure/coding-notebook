const express = require('express');
const authenticationMiddleware = require('./authentication.middleware');
const security = require('./security');
const config = require('../config/config');

const securityRouter = express.Router();

securityRouter.get('/login', (req, res) => {
    return res.render('security/login', {
        csrf: req.csrfToken(),
    });
});

securityRouter.post('/login', security.authenticate('local', { session: true }), (req, res) => {
    return res.redirect(`${config.base}/admin/posts`, {
        user: req.user,
    });
});

securityRouter.post('/logout', authenticationMiddleware, (req, res) => {
    req.logout();
    return res.redirect(`${config.base}/`);
});

module.exports = securityRouter;
