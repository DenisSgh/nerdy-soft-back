const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  date: Joi.number(),
})

const announcementsValidation = () => {
  return (req, res, next) => {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      throw new BadRequest('Missing fields')
    }
    next()
  }
}

module.exports = announcementsValidation
