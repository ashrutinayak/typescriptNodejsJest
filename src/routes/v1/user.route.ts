import { Router } from 'express'
import { celebrate } from 'celebrate'
import userController from '../../controller/v1/user.controller'
import userValidation from '../../validation/user.validation'

const router = Router()
const { createUser, updateUser, deleteUser } = userValidation

router.get('/', userController.getUser)
router.post('/create', celebrate(createUser), userController.createUser)
router.put('/update/:id', celebrate(updateUser), userController.updateUser)
router.delete('/delete/:id', celebrate(deleteUser), userController.deleteUser)
export default router
