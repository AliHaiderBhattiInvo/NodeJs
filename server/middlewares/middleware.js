const { optional } = require('joi');
const Joi = require('joi');

const validateCourse = async(req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        description: Joi.optional()
    })
    const result = schema.validate(req.body)
    if(result.error == null) next()
    else res.status(400).send('Validate ni howa')
}

module.exports = {
    validateCourse
}