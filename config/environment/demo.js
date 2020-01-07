module.exports = {
    smtp: {
        host: 'smtp.demo.com',
        port: 587,
        secure: false,
        auth: {
            user: 'yourDemoUser-Email',
            pass: 'yourDemoPassword'
        },
        tls: {
            ciphers: 'SSLv3'
        }
    },
    errorNotificationSmtp: {
        service: 'demoGmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'demo@gmailExample.com',
            pass: 'yourDemoPasssword'
        },
        port: 465,
        secure: true
    }
};
