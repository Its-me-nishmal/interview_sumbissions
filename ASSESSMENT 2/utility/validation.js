import Joi from "joi";

export const productValidation = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    variants: Joi.array().required(),
    brand: Joi.string().required(),
    category: Joi.string().required(),
});

export const orderValidation = Joi.object({
    product: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    total: Joi.number().required(),
    status: Joi.string().required(),
});
