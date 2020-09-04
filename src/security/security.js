const passport = require('passport');
const LocalStrategy = require('./local.strategy');
const User = require('./user.entity');

passport.use(LocalStrategy);

passport.serializeUser(/** @param {User} user */ (user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(/** @param {number} id */ async (id, done) => {
    try {
        const user = await User.findByPk(id);

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
});

module.exports = passport;
