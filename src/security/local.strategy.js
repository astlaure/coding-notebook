const { Strategy } = require('passport-local');
const User = require('./user.entity');
const bcryptUtil = require('./bcrypt.util');

const LocalStrategy = new Strategy({
    session: true,
}, async (username, password, done) => {
    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return done(null, false);
        }

        const passwordMatches = await bcryptUtil.compare(password, user.password);

        if (!passwordMatches) {
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
});

module.exports = LocalStrategy;
