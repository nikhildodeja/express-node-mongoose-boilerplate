const appRoot = require('app-root-path');
const router = require('express').Router(); // eslint-disable-line
const categoryCtrl = require('./category.controller');

const validate = require('express-validation');

const { category, categoryUpdate, categoryId } = require(`${appRoot}/config/param-validation`);


module.exports = (app) => {
    router.route('/')
        .post(validate(category), categoryCtrl.create)
        .get(categoryCtrl.readAll);
    router.route('/:id')
        .put(validate(categoryUpdate), categoryCtrl.update)
        .delete(validate(categoryId), categoryCtrl.deleteCategory)
        .get(validate(categoryId), categoryCtrl.read);
    app.use('/category', router);
};

