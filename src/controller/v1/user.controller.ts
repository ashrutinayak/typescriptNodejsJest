import { Request, Response } from 'express'
import model from '../../config/model.config'
import httpStatusConstant from '../../constants/httpStatus.constant'
import messageConstant from "../../constants/message.constant";

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await model.user.findAll()
    res.successResponse(httpStatusConstant.OK, messageConstant.listUser, user)
  } catch (error) {
    res.failResponse(httpStatusConstant.BAD_REQUEST, error)
  }
}
const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req)
    const { body } = req
    const { name, email, type, password } = body as {
      name: string
      email: string
      type: number
      password: string
    }
    const user = await model.user.create({
      name,
      email,
      password,
      type,
      status: 1
    })
    res.successResponse(httpStatusConstant.OK, messageConstant.createUser, user)
  } catch (error) {
    console.log(error)
    res.failResponse(httpStatusConstant.BAD_REQUEST, error)
  }
}
const updateUser = async (req: Request, res: Response) => {
  try {
    const { body, params } = req
    const user = await model.user.update(
      {
        name: body.name,
        email: body.email,
        type: body.type
      },
      {
        where: { id: params.id }
      }
    )
    res.successResponse(httpStatusConstant.OK, messageConstant.updateUser, user)
  } catch (error) {
    res.failResponse(httpStatusConstant.BAD_REQUEST, error)
  }
}
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { params } = req
    const user = await model.user.destroy({
      where: { id: params.id }
    })
    res.successResponse(httpStatusConstant.OK, messageConstant.deleteUser, user)
  } catch (error) {
    res.failResponse(httpStatusConstant.BAD_REQUEST, error)
  }
}

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
