/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi'

export const validateProductsArray = (products: any[]) => {
  try {
    const schema = Joi.array().items(
      Joi.object({
        product: {
          title: Joi.string().required().min(3),
          description: Joi.string().required().min(10),
          brand: Joi.string().optional(),
          price: Joi.number().required(),
        },
        specifications: Joi.object().optional(),
      })
    )

    const { error } = schema.validate(products)

    if (error) {
      return { error }
    } else {
      return { error: null }
    }
  } catch (err: any) {
    throw new Error(err.message)
  }
}
