import bookingModel from "../models/bookingModel.js";
import purchaseModel from "../models/purchaseModel.js";


export const completePayment = async (id, user, type = "purchase") => {
   
  let paymentItem;

  if (type === "purchase") {
    
    paymentItem = await purchaseModel.findById(id);
  } else if (type === "booking") {
    paymentItem = await bookingModel.findById(id);
  } else {
    throw new Error("Invalid payment type");
  }

  if (!paymentItem) throw new Error(`${type} not found`);

  // Only the owner can complete payment
  if (paymentItem.user.toString() !== user._id.toString()) {
    throw new Error("You are not authorized to complete this payment");
  }

  // Prevent double payment
  if (paymentItem.status === "completed" && paymentItem.paymentStatus === "completed") {
    throw new Error("Payment already completed");
  }

  // Update payment
  paymentItem.status = "completed";
  paymentItem.paymentStatus = "completed";

  await paymentItem.save();

  return paymentItem;
};