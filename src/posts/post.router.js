const express = require('express');
const Post = require('./post.entity');
const logger = require('../app/app.logger');
const config = require('../config/config');

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({ order: [['creationDate', 'DESC']], limit: 5 });
        res.render('posts/index', {
            posts,
        });
    } catch (err) {
        res.redirect(`${config.base}/`);
    }
});

postRouter.get('/create', (req, res) => {
    return res.render('posts/create', {
        csrf: req.csrfToken(),
    });
});

postRouter.post('/create', async (req, res) => {
    try {
        await Post.create(req.body);
        res.redirect(`${config.base}/posts`);
    } catch (err) {
        logger.error(err.message);
    }
});

module.exports = postRouter;
