const util = require('util');

let EXCEPTION_MESSAGES = null;

module.exports = (exceptions) => {
    EXCEPTION_MESSAGES = exceptions;

    function Exception(errorName, params) {
        Error.captureStackTrace(this, Exception);
        this.errorName = errorName;
        this.params = params;
        this.code = EXCEPTION_MESSAGES[errorName].code;
        this.http_code = EXCEPTION_MESSAGES[errorName].http_code;
        this.error_message = EXCEPTION_MESSAGES[errorName].message;
        if (params !== undefined && params != null && typeof params !== 'string') {
            Object.keys(params).forEach((key) => {
                const regExp = new RegExp(`{${key}}`, 'g');
                this.error_message = this.error_message.replace(regExp, params[key]);
            });
        } else if (params) {
            this.error_message = params;
        }

        this.stack_trace = this.stack;

        this.getError = () => ({
            Code: this.code,
            Name: this.errorName,
            Message: this.error_message
        });
    }

    util.inherits(Exception, Error);
    return Exception;
};
