const winston = require('winston');
const { Mail } = require('winston-mail');

const { errorNotificationSmtp } = require('../config/environment');

const consoleTransport = new winston.transports.Console({
    json: true,
    colorize: true,
    handleExceptions: true,
    level: 'error'
});


const transports = [consoleTransport];

if (['staging', 'production', 'demo', 'development'].includes(process.env.NODE_ENV)) {
    const mailTransport = new Mail({
        to: [
            'nikhildodeja91@gmail.com'
        ],
        from: errorNotificationSmtp.auth.user,
        host: errorNotificationSmtp.host,
        port: errorNotificationSmtp.port,
        secure: errorNotificationSmtp.secure,
        username: errorNotificationSmtp.auth.user,
        password: errorNotificationSmtp.auth.pass,
        level: 'error'
    });
    transports.push(mailTransport);
}

const logger = new (winston.Logger)({
    transports,
    exitOnError: false
  });


module.exports = logger;
