module.exports = {
    smtp: {
        host: 'smtp.development.com',
        port: 587,
        secure: false,
        auth: {
            user: 'yourDevelopmentUser-Email',
            pass: 'yourDevelopmentPassword'
        },
        tls: {
            ciphers: 'SSLv3'
        }
    },
    errorNotificationSmtp: {
        service: 'development',
        host: 'smtp.gmail.com',
        auth: {
            user: 'development@gmailExample.com',
            pass: 'yourDevelopmentPasssword'
        },
        port: 465,
        secure: true
    }
};
