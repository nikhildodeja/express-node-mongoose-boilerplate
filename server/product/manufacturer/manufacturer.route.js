const appRoot = require('app-root-path');
const router = require('express').Router(); // eslint-disable-line
const manuCtrl = require('./manufacturer.controller');

const validate = require('express-validation');

const { createManufacturer, updateManufacturer, manufacturerId } = require(`${appRoot}/config/param-validation`);


module.exports = (app) => {
    router.route('/')
        .post(validate(createManufacturer), manuCtrl.create)
        .get(manuCtrl.readAll);

    router.route('/:id')
    .put(validate(updateManufacturer), manuCtrl.update)
    .delete(validate(manufacturerId), manuCtrl.deleteManufacturer)
    .get(validate(manufacturerId), manuCtrl.read);
    app.use('/manufacturer', router);
};

