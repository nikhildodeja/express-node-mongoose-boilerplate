const appRoot = require('app-root-path');
const express = require('express');


const validate = require('express-validation');

const router = express.Router(); // eslint-disable-line
const authCtrl = require('./auth.controller');

const { authLogin } = require(`${appRoot}/config/param-validation`);

router.post('/login', validate(authLogin), authCtrl.login);
router.post('/test', authCtrl.testUser);
module.exports = router;
