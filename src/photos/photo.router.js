const express = require('express');
const sharp = require('sharp');
const config = require('../config/config');

const photoRouter = express.Router();

photoRouter.post('/upload', (req, res) => {
    const { path } = req.file;

    sharp(path)
        .resize({ width: 1920, height: 1080, fit: 'inside' })
        .toFile(path);

    res.redirect(`${config.base}/`);
});

module.exports = photoRouter;
