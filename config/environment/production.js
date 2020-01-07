module.exports = {
    smtp: {
        host: 'smtp.production.com',
        port: 587,
        secure: false,
        auth: {
            user: 'yourProductionUser-Email',
            pass: 'yourProductionPassword'
        },
        tls: {
            ciphers: 'SSLv3'
        }
    },
    errorNotificationSmtp: {
        service: 'Production',
        host: 'smtp.gmail.com',
        auth: {
            user: 'production@gmailExample.com',
            pass: 'yourProductionPasssword'
        },
        port: 465,
        secure: true
    }
};
