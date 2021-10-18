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
  name: Joi.string().required()
});

const validateCitiesByState = Joi.object({
  name: Joi.string().required()
});

const validateClientsByName = Joi.object({
  name: Joi.string().required()
});




export {
    validateCity,
    validateClient,
    validateCityByName,
    validateCitiesByState,
    validateClientsByName
};