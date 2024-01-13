const Joi = require("joi");

const exam_user_login_scheme = Joi.object({
   user_ID: Joi.string().min(3).required(),
   password: Joi.string().min(3).required(),
});

module.exports = { exam_user_login_scheme };
