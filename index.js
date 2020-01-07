global.appRoot = require('app-root-path');

const cors = require('cors');
const config = require('./config/config');
const app = require('./config/express');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect(config.dbUrl,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.set('debug', true);

app.use((req, res, next) => {
    next();
});


// enable CORS
app.use(cors());

// init server
const server = app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`); // eslint-disable-line
});


server.setTimeout(240000);
module.exports = server;
