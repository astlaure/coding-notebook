const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const logger = require('../app/app.logger');

const markdown = MarkdownIt({
    highlight(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {
                logger.warn('cannot parse the markdown.');
            }
        }

        return ''; // use external default escaping
    },
});

function markdownHelper(value) {
    return markdown.render(value);
}

module.exports = markdownHelper;
