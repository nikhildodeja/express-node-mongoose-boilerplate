const logger = require(`${global.appRoot}/config/winston`);
const Manufacturer = require(`${global.appRoot}/app/model/manufacturer.model`);

/**
 * @api {post} /api/manufacturer Create Manufacturer
 * @apiGroup Manufacturer
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} name as Manufacturer name
 * @apiParamExample {json} Input
 *  {
 *      "name": "Adidas"
 *  }
 * @apiSuccess {String} id Manufacturer id
 * @apiSuccess {String} name Manufacturer Name
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "4554444444ddeee",
 *      "name": "Adidas"
 *    }
 */

const create = async (req, res) => {
    try {
        const manufacturer = new Manufacturer(req.body);
        await manufacturer.save();
        return res.sendResponse(manufacturer);
    } catch (e) {
        logger.log('error', e);
        return res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};

/**
 * @api {put} /api/manufacturer/:id Update Manufacturer
 * @apiGroup Manufacturer
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} id as Manufacturer Id
 * @apiParam {String} name as Manufacturer name
 * @apiParamExample {json} Input
 *  {
 *      "name": "Adidas"
 *  }
 * @apiSuccess {String} id Manufacturer id
 * @apiSuccess {String} name Manufacturer Name
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "4554444444ddeee",
 *      "name": "Puma"
 *    }
 */

const update = async (req, res) => {
    try {
        const updateData = { name: req.body.name };
        if (req.body.parent) update.parent = req.body.parent;
        const manufacturer = await Manufacturer.findByIdAndUpdate(req.params.id, updateData);
        return res.sendResponse(manufacturer);
    } catch (e) {
        logger.log('error', e);
        return res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};


/**
 * @api {delete} /api/manufacturer/:id Delete Manufacturer
 * @apiGroup Manufacturer
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} id as Manufacturer Id
 */

const deleteManufacturer = async (req, res) => {
    try {
        await Manufacturer.findByIdAndRemove(req.params.id);
        return res.sendResponse({});
    } catch (e) {
        logger.log('error', e);
        return res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};

/**
 * @api {get} /api/manufacturer/:id Read Manufacturer
 * @apiGroup Manufacturer
 * @apiHeader Authorization Bearer {{token}}
 * @apiParam {String} id as Manufacturer Id
 * @apiSuccess {String} id Manufacturer id
 * @apiSuccess {String} name Manufacturer Name
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "4554444444ddeee",
 *      "name": "Adidas"
 *    }
 */

const read = async (req, res) => {
    try {
        const manufacturer = await Manufacturer.findById(req.params.id);
        res.sendResponse(manufacturer);
    } catch (e) {
        logger.log('error', e);
        res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};

/**
 * @api {get} /api/manufacturer Read Manufacturer
 * @apiGroup Manufacturer
 * @apiHeader Authorization Bearer {{token}}
 * @apiSuccess {Manufactureres} Manufacturer    List of Manufacturer
 * @apiSuccess {String} name Manufacturer.name
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": "4554444444ddeee",
 *      "name": "Adidas"
 *    }]
 */

const readAll = async (req, res) => {
    try {
        const Manufactureres = await Manufacturer.find();
        res.sendResponse(Manufactureres);
    } catch (e) {
        logger.log('error', e);
        res.sendError(new global.Exception('GeneralError', 'Internal Sever Error'));
    }
};

module.exports = {
    create,
    update,
    deleteManufacturer,
    read,
    readAll
};
