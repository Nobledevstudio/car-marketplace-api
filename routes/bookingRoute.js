import express from  'express'
import { protect } from '../middleware/protect.js'
import { cancelBookingController, createBookingController, getBookingsForDealerController, getUserBookingController } from '../controllers/bookingController.js';
import { authorizeRoles } from '../middleware/authorizeRole.js';


const bookingRouter = express.Router();


bookingRouter.post('/create-booking' , protect, authorizeRoles('customer'), createBookingController);
bookingRouter.get('/user' , protect, authorizeRoles('customer'), getUserBookingController);
bookingRouter.patch('/:id/cancel-booking' , protect, authorizeRoles('customer'), cancelBookingController);
bookingRouter.get('/dealer', protect, authorizeRoles('dealer'), getBookingsForDealerController)


export default bookingRouter;