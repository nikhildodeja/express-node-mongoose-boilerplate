const appRoot = require('app-root-path');
const router = require('express').Router(); // eslint-disable-line
const productCtrl = require('./product.controller');

const validate = require('express-validation');

const { createProduct, updateProduct, productId } = require(`${appRoot}/config/param-validation`);


module.exports = (app) => {
    router.route('/')
        .post(validate(createProduct), productCtrl.create)
        .get(productCtrl.readAll);
    router.route('/:id')
        .put(validate(updateProduct), productCtrl.update)
        .delete(validate(productId), productCtrl.deleteProduct)
        .get(validate(productId), productCtrl.read);
    app.use('/', router);
};

