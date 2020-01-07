const logger = require(`${global.appRoot}/config/winston`);
const Product = require(`${global.appRoot}/app/model/product.model`);

/**
 * @api {post} /api/product Create Product
 * @apiGroup Product
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} name as Product name
 * @apiParam {String} sku as optional
 * @apiParam {String} manufacturer
 * @apiParam {String} category
 * @apiParamExample {json} Input
 *  {
 *      "name": "Shoues Blue",
 *      "sku": "SAdBL",
 *      "manufacturer": "5e05b92a61299f3ad05d224d",
 *      "category": "5e049f7aca2871395c43207c"
 *  }
 * @apiSuccess {String} id Product id
 * @apiSuccess {String} name Product Name
 * @apiSuccess {String} manufacturer Product Manufacturer id
 * @apiSuccess {String} category Product Category id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "577eebbbb777eee",
 *      "name": "Shoues Blue",
 *      "sku": "SAdBL",
 *      "manufacturer": "5e05b92a61299f3ad05d224d",
 *      "category": "5e049f7aca2871395c43207c"
 *    }
 */


const create = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.sendResponse(product);
    } catch (e) {
        logger.log('error', e);
        return res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};


/**
 * @api {put} /api/product/:id Update Product
 * @apiGroup Product
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} id as Product Id
 * @apiParam {String} name as Product name
 * @apiParam {String} sku as Product sku
 * @apiParam {String} manufacturer as Product manufacturer
 * @apiParam {String} category as Product category
 * @apiParamExample {json} Input
 *  {
 *      "name": "Shoues Blue",
 *      "sku": "SAdBL",
 *      "manufacturer": "5e05b92a61299f3ad05d224d",
 *      "category": "5e049f7aca2871395c43207c"
 *  }
 * @apiSuccess {String} id Product id
 * @apiSuccess {String} name Product Name
 * @apiSuccess {String} manufacturer Product Manufacturer id
 * @apiSuccess {String} category Product Category id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "577eebbbb777eee",
 *      "name": "Shoues Blue",
 *      "sku": "SAdBL",
 *      "manufacturer": "5e05b92a61299f3ad05d224d",
 *      "category": "5e049f7aca2871395c43207c"
 *    }
 */

const update = async (req, res) => {
    try {
        const updateData = { name: req.body.name };
        if (req.body.parent) update.parent = req.body.parent;
        const product = await Product.findByIdAndUpdate(req.params.id, updateData);
        return res.sendResponse(product);
    } catch (e) {
        logger.log('error', e);
        return res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};

/**
 * @api {delete} /api/product/:id Delete Product
 * @apiGroup Product
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} id as Product Id
 */

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.id);
        return res.sendResponse({});
    } catch (e) {
        logger.log('error', e);
        return res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};


/**
 * @api {get} /api/product/:id Read Product
 * @apiGroup Product
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} id as Product Id
 * @apiSuccess {String} id Product id
 * @apiSuccess {String} name Product Name
 * @apiSuccess {String} manufacturer Product Manufacturer id
 * @apiSuccess {String} category Product Category id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "577eebbbb777eee",
 *      "name": "Shoues Blue",
 *      "sku": "SAdBL",
 *      "manufacturer": "5e05b92a61299f3ad05d224d",
 *      "category": "5e049f7aca2871395c43207c"
 *    }
 */

const read = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        .populate({
            path: 'category',
            select: 'name -_id'
        }).lean();
        res.sendResponse(product);
    } catch (e) {
        logger.log('error', e);
        res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};

/**
 * @api {get} /api/product Read Products
 * @apiGroup Product
 * @apiHeader Authorization Bearer {{token}}
 * @apiSuccess {Products} Product    List of Category
 * @apiSuccess {String} id Product id
 * @apiSuccess {String} name Product Name
 * @apiSuccess {String} manufacturer Product Manufacturer id
 * @apiSuccess {String} category Product Category id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": "577eebbbb777eee",
 *      "name": "Shoues Blue",
 *      "sku": "SAdBL",
 *      "manufacturer": "5e05b92a61299f3ad05d224d",
 *      "category": "5e049f7aca2871395c43207c"
 *    }]
 */

const readAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.sendResponse(products);
    } catch (e) {
        logger.log('error', e);
        res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};


module.exports = {
    create,
    update,
    deleteProduct,
    read,
    readAll
};
