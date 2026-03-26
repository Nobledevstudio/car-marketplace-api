import express from 'express'
import{ protect } from '../middleware/protect.js'
import { authorizeRoles } from '../middleware/authorizeRole.js'
import { createCarController, deleteController, updateCarController, viewAllCarController, viewCarByIdController } from '../controllers/carController.js'

const carRouter = express.Router()

carRouter.post('/create', protect, authorizeRoles('dealer'), createCarController)
carRouter.get('/', viewAllCarController)
carRouter.get('/view/:id', viewCarByIdController)
carRouter.put('/update/:id', protect, authorizeRoles('dealer'), updateCarController)
carRouter.delete('/delete/:id', protect, authorizeRoles('dealer','admin'), deleteController);


export default carRouter;