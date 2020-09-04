const express = require('express');

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
    return res.render('app/index');
});

module.exports = appRouter;
