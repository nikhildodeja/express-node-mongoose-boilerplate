module.exports = {
    smtp: {
        host: 'smtp.staging.com',
        port: 587,
        secure: false,
        auth: {
            user: 'yourStagingUser-Email',
            pass: 'yourStagingPassword'
        },
        tls: {
            ciphers: 'SSLv3'
        }
    },
    errorNotificationSmtp: {
        service: 'Staging',
        host: 'smtp.gmail.com',
        auth: {
            user: 'staging@gmailExample.com',
            pass: 'yourStagingPasssword'
        },
        port: 465,
        secure: true
    }
};
