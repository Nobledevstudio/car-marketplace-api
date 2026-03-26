import express from "express";
import { completeBookingController, completePurchaseController } from "../controllers/paymentController.js";
import { protect } from "../middleware/protect.js";
import { authorizeRoles } from "../middleware/authorizeRole.js";

const paymentRouter = express.Router();

// Complete a purchase
paymentRouter.post("/complete/:id", protect, authorizeRoles("customer"), completePurchaseController);

// Complete a booking
paymentRouter.post("/booking/complete/:id", protect, authorizeRoles("customer"), completeBookingController);

export default paymentRouter;