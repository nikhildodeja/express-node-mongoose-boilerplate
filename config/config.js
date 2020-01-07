const Joi = require('joi');
require('dotenv').config();

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
      .allow(['development', 'demo', 'staging', 'production'])
      .default('development'),
    PORT: Joi.number()
      .default(5000),
    JWT_SECRET: Joi.string().required()
      .description('JWT Secret required to sign'),
    DB_URL: Joi.string().required()
        .description('DB_URL Required')
}).unknown()
.required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    jwtSecret: envVars.JWT_SECRET,
    dbUrl: envVars.DB_URL
};

module.exports = config;

