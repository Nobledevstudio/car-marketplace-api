import express from 'express'
import { protect } from '../middleware/protect.js'
import { authorizeRoles } from '../middleware/authorizeRole.js'
import { createPurchaseController, userPurchaseController, cancelPurchaseController, ViewPurchasesController } from '../controllers/purchaseController.js'

const purchaseRouter = express.Router()

purchaseRouter.post('/', protect, authorizeRoles('customer'),createPurchaseController)
purchaseRouter.get('/user', protect, authorizeRoles('customer', 'admin'), userPurchaseController)
purchaseRouter.patch('/:id/cancel-purchase', protect, authorizeRoles('customer'), cancelPurchaseController)
purchaseRouter.get('/dealer', protect, authorizeRoles('dealer'), ViewPurchasesController)

export default purchaseRouter