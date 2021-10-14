import Joi from 'joi';


const validateClient = Joi.object({
  name: Joi.string().required(),
  gender: Joi.string().required(),
  birth: Joi.date().required(),
  city: Joi.string().required()
});

const validateCity = Joi.object({
  name: Joi.string().required(),
  state: Joi.string().required()
});

const validateCityByName = Joi.object({
  city: Joi.string().required()
});

const validateCitiesByState = Joi.object({
  state: Joi.string().required()
});




export {
    validateCity,
    validateClient,
    validateCityByName,
    validateCitiesByState
};