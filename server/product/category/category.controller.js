const logger = require(`${global.appRoot}/config/winston`);
const Category = require(`${global.appRoot}/app/model/category.model`);

/**
 * @api {post} /api/category Create Category
 * @apiGroup Category
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} name as Category name
 * @apiParam {String} parent as optional
 * @apiParamExample {json} Input
 *  {
 *      "name": "Men",
 *      "parent": "477777eeeee7777"
 *  }
 * @apiSuccess {String} id Category id
 * @apiSuccess {String} name Category Name
 * @apiSuccess {String} parent Parent-categoryId
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "4554444444ddeee",
 *      "name": "Car",
 *      "parent": "4777777"
 *    }
 */


const create = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        return res.sendResponse(category);
    } catch (e) {
        logger.log('error', e);
        return res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};


/**
 * @api {put} /api/category/:id Update Category
 * @apiGroup Category
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} id as Category Id
 * @apiParam {String} name as Category name
 * @apiParam {String} parent as optional
 * @apiParamExample {json} Input
 *  {
 *      "name": "Men",
 *      "parent": "477777eeeee7777"
 *  }
 * @apiSuccess {String} id Category id
 * @apiSuccess {String} name Category Name
 * @apiSuccess {String} parent Parent-categoryId
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "4554444444ddeee",
 *      "name": "Car",
 *      "parent": "4777777"
 *    }
 */

const update = async (req, res) => {
    try {
        const updateData = { name: req.body.name };
        if (req.body.parent) update.parent = req.body.parent;
        const category = await Category.findByIdAndUpdate(req.params.id, updateData);
        return res.sendResponse(category);
    } catch (e) {
        logger.log('error', e);
        return res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};

/**
 * @api {delete} /api/category/:id Delete Category
 * @apiGroup Category
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} id as Category Id
 */

const deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params.id);
        return res.sendResponse({});
    } catch (e) {
        logger.log('error', e);
        return res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};


/**
 * @api {get} /api/category/:id Read Category
 * @apiGroup Category
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} id as Category Id
 * @apiSuccess {String} id Category id
 * @apiSuccess {String} name Category Name
 * @apiSuccess {String} parent Parent-categoryId
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "4554444444ddeee",
 *      "name": "Car",
 *      "parent": "4777777"
 *    }
 */

const read = async (req, res) => {
    try {
     const category = await Category.find({ _id: req.params.id })
        .populate({
            path: 'products',
            select: 'name'
        });
        res.sendResponse(category);
    } catch (e) {
        logger.log('error', e);
        res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};

/**
 * @api {get} /api/category Read Categories
 * @apiGroup Category
 * @apiHeader Authorization Bearer {{token}}
 * @apiSuccess {Categories} Category    List of Category
 * @apiSuccess {String} name Categroy.name
 * @apiSuccess {String} parent Category.parent
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": "4554444444ddeee",
 *      "name": "Car",
 *      "parent": "4777777"
 *    }]
 */

const readAll = async (req, res) => {
    try {
        const categories = await Category.find();
        res.sendResponse(categories);
    } catch (e) {
        logger.log('error', e);
        res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};


module.exports = {
    create,
    update,
    deleteCategory,
    read,
    readAll
};
