const EMAIL_REGEX = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
const Joi = require('joi');

module.exports = {
    // auth
    authLogin: {
        body: {
            email: Joi.string().regex(EMAIL_REGEX).required(),
            password: Joi.string().required()
        }
    },
    // category
    category: {
        body: {
            name: Joi.string().required()
        }
    },
    categoryUpdate: {
        params: {
            id: Joi.string().required()
        },
        body: {
            name: Joi.string().required()
        }
    },
    categoryId: {
        params: {
            id: Joi.string().required()
        }
    },
    // manufacturer
    createManufacturer: {
        body: {
            name: Joi.string().required()
        }
    },
    updateManufacturer: {
        params: {
            id: Joi.string().required()
        },
        body: {
            name: Joi.string().required()
        }
    },
    manufacturerId: {
        params: {
            id: Joi.string().required()
        }
    },
    // product
    createProduct: {
        body: {
            name: Joi.string().required(),
            sku: Joi.string().required(),
            manufacturer: Joi.string().required(),
            category: Joi.string().required()

        }
    },
    updateProduct: {
        params: {
            id: Joi.string().required()
        },
        body: {
            name: Joi.string().required(),
            sku: Joi.string().required(),
            manufacturer: Joi.string().required(),
            category: Joi.string().required()
        }
    },
    productId: {
        params: {
            id: Joi.string().required()
        }
    }
};
