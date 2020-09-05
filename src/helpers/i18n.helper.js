const hbs = require('hbs');

function i18nHelper(key) {
    const result = this.t(key);
    return new hbs.handlebars.SafeString(result);
}

module.exports = i18nHelper;
