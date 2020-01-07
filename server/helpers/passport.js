const { isEmpty } = require('lodash');
const passport = require('passport');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const LocalStrategy = require('passport-local').Strategy;

const config = require(`${global.appRoot}/config/config`);
const User = require(`${global.appRoot}/app/model/user.model`);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        return done(null, user);
    } catch (e) {
        return done(e);
    }
});

passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    const user = await User.findOne({ email });
    if (isEmpty(user)) {
      return done(null, false, {
        msg: `Email ${email} not found.`
      });
    }
    if (crypto.createHash('md5').update(password).digest('hex') === user.password) {
        return done(null, user);
    }
    return done(null, false, {
        msg: 'Invalid password.'
    });
}));

function isAuthenticated(req, res, next) { //eslint-disable-line
    let token = req.headers['x-access-token'] || req.headers.authorization || ''; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    if (token) {
        jwt.verify(token, config.jwtSecret, (err, decoded) => { //eslint-disable-line
            if (err) {
                return res.sendError(new global.Exception('AuthorizationFailed'));
            }
            req.decoded = decoded; //eslint-disable-line
            return next();
        });
    } else {
        return res.sendError(new global.Exception('AuthorizationFailed'));
    }
}

module.exports = {
    isAuthenticated
};
