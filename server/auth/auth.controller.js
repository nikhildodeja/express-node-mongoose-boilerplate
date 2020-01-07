const passport = require('passport');
const jwt = require('jsonwebtoken');

const UserSchema = require(`${global.appRoot}/app/model/user.model`);
const config = require(`${global.appRoot}/config/config`);


function login (req, res, next)  { // eslint-disable-line
    passport.authenticate('local', (err, user) => {
        if (err) {
            return res.sendError(new global.Exception('AuthenticationFailed'));
        }
        if (!user) {
            return res.sendError(new global.Exception('AuthenticationFailed'));
        }
        return req.login(user, (error) => {
            if (error) {
                return res.sendError(new global.Exception('AuthenticationFailed'));
            }
            const User = Object.assign({}, JSON.parse(JSON.stringify(user)));
            const token = jwt.sign({ id: User.id, timestamp: Date.now() }, config.jwtSecret, { expiresIn: '90m' });
            User.token = token;
            delete User.password;
            return res.sendResponse({ User });
        });
    })(req, res, next);
}

const testUser = async (req, res) => {
    await UserSchema.deleteMany({ email: 'email@email.com' });
    const user = new UserSchema({
        username: 'nikhil',
        email: 'email@email.com',
        password: 'password'
    });
    await user.save();
    const ok = 'ok';
    res.sendResponse({
        ok
    });
};

module.exports = {
    login,
    testUser
};
