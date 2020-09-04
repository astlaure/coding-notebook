const bcrypt = require('bcrypt');

/**
 * @param {string} password
 */
const generate = async (password) => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (err) {
        throw Error();
    }
};

/**
 * @param {string} password
 * @param {string} encrypted
 */
const compare = async (password, encrypted) => {
    try {
        return await bcrypt.compare(password, encrypted);
    } catch (err) {
        throw Error();
    }
};

module.exports = {
    generate,
    compare,
};
