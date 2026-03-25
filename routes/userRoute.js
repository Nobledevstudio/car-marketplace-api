// Import necessary modules and controllers
import express from 'express'
import { loginController, registerController } from '../controllers/authController.js'


// Create a new router instance
const userRouter = express.Router()


userRouter.post('/register', registerController)
userRouter.post('/login', loginController)



export default userRouter