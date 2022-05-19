import { Request, Response } from 'express'
import model from '../../config/model.config'
import httpStatusConstant from '../../constants/httpStatus.constant'
import messageConstant from "../../constants/message.constant";

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await model.user.findAll()
    res.status(httpStatusConstant.OK).json({ message: messageConstant.listUser, user });
  } catch (error) {
    res.status(httpStatusConstant.BAD_REQUEST).send(error)
  }
}
const createUser = async (req: Request, res: Response) => {
  try {
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
    res.status(httpStatusConstant.OK).json({ message: messageConstant.createUser, user})
} catch (error) {
    console.log(error)
    res.status(httpStatusConstant.BAD_REQUEST).send(error)
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
    res.status(httpStatusConstant.OK).json({ message: messageConstant.updateUser, user})
  } catch (error) {
    res.status(httpStatusConstant.BAD_REQUEST).send(error)
  }
}
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { params } = req
    const user = await model.user.destroy({
      where: { id: params.id }
    })
    res.status(httpStatusConstant.OK).json({ message: messageConstant.deleteUser, user})
  } catch (error) {
    res.status(httpStatusConstant.BAD_REQUEST).send(error)
  }
}

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
