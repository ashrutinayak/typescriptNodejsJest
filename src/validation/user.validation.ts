import { Joi } from 'celebrate'

const createUser = {
  body: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .regex(/^[ A-Za-z0-9_@./#&+-]*$/)
      .min(6)
      .max(16),
    type: Joi.number()
  }
}

const updateUser = {
  body: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    type: Joi.number()
  },
  params: {
    id: Joi.string().required()
  }
}
const deleteUser = {
  params: {
    id: Joi.string().required()
  }
}
export default {
  createUser,
  updateUser,
  deleteUser
}
