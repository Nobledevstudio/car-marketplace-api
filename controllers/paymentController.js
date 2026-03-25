import { completePayment } from "../services/paymentServices.js"

export const completePurchaseController = async (req, res) => {
  try {
    const paymentItem = await completePayment(req.params.id, req.user, "purchase");

    res.status(200).json({
      success: true,
      message: "Purchase payment completed successfully",
      paymentItem,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const completeBookingController = async (req, res) => {
  try {
    const paymentItem = await completePayment(req.params.id, req.user, "booking");

    res.status(200).json({
      success: true,
      message: "Booking payment completed successfully",
      paymentItem,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

