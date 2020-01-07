const moment = require('moment-timezone');
const crypto = require('crypto');

exports.getDateFromTimeoffset = (ts, timezone, format) => {
    let defaultTimezone = timezone;
    const defaultFormat = format || 'DD-MM-YYYY';
    if (timezone === '' || timezone === false) {
        defaultTimezone = 'Asia/Kolkata';
    }
    const dt = moment(ts * 1000).tz(defaultTimezone).format(defaultFormat);
    return dt;
};

exports.getUTCTimeoffsetFromDate = (date) => {
    const dt = moment(date).tz('UTC').format('x') / 1000;
    return dt;
};


exports.GUID = () => {
    const s4 = () => Math.floor(Math.random() * 0x10000 /* 65536 */).toString(16);
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

exports.trim = (string, str) => {
    if (str !== undefined) {
        const patt = new RegExp(`^(${str})*|(${str})*$`, 'gi');
        return string.replace(patt, '');
    }
    return string.replace(/^\s*|\s*$/g, '');
};

exports.trimLeft = (string, str) => {
    if (str !== undefined) {
        const patt = new RegExp(`^(${str})*`, 'gi');
        return string.replace(patt, '');
    }
    return string.replace(/^\s*/g, '');
};

exports.trimRight = (string, str) => {
    if (str !== undefined) {
        const patt = new RegExp(`(${str})*$`, 'gi');
        return string.replace(patt, '');
    }
    return string.replace(/\s*$/g, '');
};


exports.toUnderscore = () => this.replace(/([A-Z])/g, ($1) => `_${$1.toLowerCase()}`); // eslint-disable-line

exports.isValidEmail = (val) => {
    if (!val) return false;
    return (/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(val);
};

exports.isEmpty = (val) => {
    if (typeof val === 'string') {
        if (val.length) { // when it comes empty, something went wrong!
            return true;
        }
        return false;
    }
    return false;
};

exports.isISODateFormat = (dat) => {
    const date = new Date(dat);
    try {
        const isoDate = `${date.toISOString().split('.')[0]}Z`;
        if (isoDate === dat) {
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
};

exports.isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

exports.isValidUSzipCode = val => (/^[\d]{5}(-[\d]{4})?$/).test(val);

exports.isValidPhone = (val) => {
    let phone = val;
    if (phone === '' || phone === undefined || phone === null) {
        return false;
    }
    phone = phone.replace(new RegExp(/[().\- ]/mg), '');
    if (!phone.match('[0-9]{10}')) { return false; }

    return true;
};

exports.md5 = str => crypto.createHash('md5').update(str).digest('hex');

exports.escape = (str) => {
    const entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;'
    };
    return String(str).replace(/[&<>"']/g, s => entityMap[s]);
};

exports.unescape = (str) => {
    const entityMap = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '<',
        '&quot;': '"',
        '&#39;': "'",
        '&#x2F;': '/',
        '&apos;': "'",
        'lt;': '<',
        'gt;': '>'
    };
    return String(str).replace(/(&amp;|$lt;|lt;|gt;|&gt;|&quot;|&#39;|&#x2F;|&apos;)/g, s =>
entityMap[s]);
};

exports.encrypt = (buffer, password) => {
    const algorithm = 'aes-256-ctr';
    const cipher = crypto.createCipher(algorithm, password);
    const crypted = Buffer.concat([cipher.update(buffer), cipher.final()]).toString('base64');
    return crypted;
};

exports.decrypt = (buffer, password) => {
    const bufferObject = new Buffer(buffer, 'base64').toString('ascii');
    const algorithm = 'aes-256-ctr';
    const decipher = crypto.createDecipher(algorithm, password);
    const dec = bufferObject.concat([decipher.update(buffer), decipher.final()]).toString('ascii');
    return dec;
};
