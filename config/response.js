const {
    find
} = require('lodash');

function ResponseHandler(req, resp) {
    const response = resp;
    this.path = ''; // eslint-disable-line
    this.sendResponse = (res, notSendNoRecords) => { // eslint-disable-line
        if (Object.keys(resp).length > 0 || notSendNoRecords) {
            let str = global.Utils.unescape(JSON.stringify(res));
            str = str.replace(/&<[^>]*>/g, ' ');
            str = str.replace(/ {2}/g, '');
            const result = JSON.parse(str);
            return response.send({
                Status: 'success',
                Data: result
            });
        }
        return response.send({
            Status: 'success',
            Data: resp,
            Message: 'No records found'
        });
    };
    this.sendError = (e) => {
        let err;
        if (e.http_code) {
            response.status(e.http_code);
        } else {
            response.status(400);
        }

        if (e instanceof global.Exception) {
            err = e.getError();
        } else {
            err = e;
        }
        return response.json({
            Status: 'failure',
            Error: err
        });
    };
}

class Response {
    constructor() {
        this.handler = function handler() {
            return (req, res, next) => {
                const response = res;
                const respHandler = new ResponseHandler(req, res);
                respHandler.startTime = (new Date()).getTime();
                response.sendResponse = respHandler.sendResponse;
                response.sendError = respHandler.sendError;
                return next();
            };
        };
        this.authHandler = function authHandler(bypassedPaths) {
            return (req, res, next) => {
                const authAccessKey = req.headers.appkey;

                const path = find(bypassedPaths, (key) => {
                    const regex = new RegExp(key, 'i');
                    return req.path.match(regex);
                });
                if (path === undefined) {
                    // Verify Access Key & Secret Key is passed
                    if (authAccessKey === '' || authAccessKey === undefined) {
                        const exception = new global.Exception('InvalidAuthRequest', 'Application Key missing');
                        return res.sendError(exception);
                    }
                }
                next();
                return false;
            };
        };
    }
}
module.exports = Response;
