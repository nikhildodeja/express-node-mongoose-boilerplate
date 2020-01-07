const express = require('express');
const logger = require('morgan');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const winstonInstance = require('./winston');
const unless = require('express-unless');
const httpStatus = require('http-status');
const session = require('express-session');
const expressWinston = require('express-winston');
const routeProduct = require('../index.product.route');

const routeAuth = require(`${global.appRoot}/server/auth/auth.route`);
const routeTest = require(`${global.appRoot}/server/test/test.route`);
const exceptions = require('./exceptions.json');
const Response = require('./response');
const Exception = require('./exception')(Object.assign(exceptions));
const expressValidation = require('express-validation');
const config = require('./config');

const securePaths = require('../server/helpers/passport');

const APIError = require(`${global.appRoot}/server/helpers/APIError`);

const passport = require('passport');

const response = new Response();

require('../server/helpers/passport');
global.Utils = require('./utils.js');

const app = express();

global.Exception = Exception;

app.use(response.handler());

// app.use((_, res, next) => {
//     const resp = res;
//     resp.sendResponse = (data) => {
//         return res.send({
//           Stats: 'Success',
//           Data: data
//         });
//     };
//     resp.sendError = (e) => {
//         let err;
//         if (e.http_code) {
//             resp.status(e.http_code);
//         } else {
//             resp.status(400);
//         }

//         if (e instanceof global.Exception) {
//             err = e.getError();
//         } else {
//             err = e;
//         }
//         return resp.json({
//             Status: 'failure',
//             Error: err
//         });
//     };
//     next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

if (config.env === 'development') {
    app.use(logger('dev'));
}

app.use((req, res, next) => {
    global.currentRequest = req;
    next();
});

app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// parse body params and attache them to req.body
if (config.env === 'development') {
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(expressWinston.logger({
        winstonInstance,
        meta: true, // optional: log meta data about request (defaults to true)
        msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
        colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
    })
 );
}


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

// unless middleware implementation

// api docs

app.use('/apidoc', express.static(`${global.appRoot}/docs`));

const authMiddleware = securePaths.isAuthenticated;
authMiddleware.unless = unless;

app.use(authMiddleware.unless({
    path: [
         { url: '/api/auth/login' },

    ]
}));

app.use('/api/product', routeProduct);
app.use('/api/auth', routeAuth);
app.use('/api/test', routeTest);


app.use((err, _, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
        const error = new APIError(unifiedErrorMessage, err.status, true);
        return res.sendError(new Exception('ValidationError', error.message || unifiedErrorMessage));
    } else if (!(err instanceof APIError)) {
        const apiError = new APIError(err.message, err.status, err.isPublic);
        return next(apiError);
    }
    return next(err);
});
  // app.use(expressValidation());
  // catch 404 and forward to error handler
app.use((_, res) => res.sendError(new Exception('RouteNotFound', 'Not route found')));

  // log error in winston transports except when executing test suite
if (config.env !== 'staging') {
    app.use(expressWinston.errorLogger({
        winstonInstance
    }));
}

app.use((err, req, res) => {
    // eslint-disable-line no-unused-vars
    const message = err.isPublic ? err.message : httpStatus[err.status];
    res.sendError(new Exception('GeneralError', message));
});


module.exports = app;
