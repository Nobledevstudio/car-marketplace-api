import bookingModel from "../models/bookingModel.js";
import carModel from "../models/carModel.js"
import purchaseModel from "../models/purchaseModel.js";

const isRentalConflict = (existingBookings, startDate, endDate) => {

  const newStart = new Date(startDate)
  const newEnd = new Date(endDate)

  return existingBookings.some((booking) => {
    // If the booking doesn't have start or end date, we consider it a conflict (should not happen for rent bookings)
    const existingStart = new Date(booking.startDate)
    const existingEnd = new Date(booking.endDate)
    return newStart < existingEnd && newEnd > existingStart
  })
}

export const createBooking = async ({ carId, userId, startDate, endDate }) => {

  // Find the car by ID
  const car = await carModel.findById(carId);

  // If car not found, throw an error
  if (!car) throw new Error("Car not found");

  // Check if the car is available for rent
  if (car.listingType === "rent" || car.listingType === "both") {

    if (car.status === "booked" || car.status === "sold") {
      throw new Error("Car is not available for rent");
    }

    if (!startDate || !endDate) {
      throw new Error("Start and End dates are required for rent");
    }

    if (new Date(startDate) >= new Date(endDate)) {
      throw new Error("End date must be after start date");
    }

    const existingRentals = await bookingModel.find({ car: carId });

    if (isRentalConflict(existingRentals, startDate, endDate)) {
      throw new Error("This car is already booked for the selected dates");
    }

    const existingPurchase = await purchaseModel.findOne({
      car: carId,
      status: { $in: ["pending", "approved"] } // still active
    });

    if (existingPurchase) {
        throw new Error("Car is already reserved for purchase and cannot be booked for rent");
    }

    const booking = await bookingModel.create({
      user: userId,
      car: carId,
      dealer: car.dealer,
      startDate,
      endDate
    });

    return booking;
  } else {
    throw new Error("This car is not available for rent");
  }
};

export const getUserBooking = async (userId) => {

  const bookings = await bookingModel
    .find({ user: userId })
    .populate("car")
    .populate("dealer", "name email");
  return bookings;

};


export const cancelBooking = async (bookingId, userId) => {

  const booking = await bookingModel.findById(bookingId);

  if (!booking) throw new Error("Booking Not Found");

  if (booking.user._id.toString() !== userId.toString()) throw new Error("Not authorized to cancel this booking");

  if (booking.status === "cancelled") throw new Error("Booking Already Cancelled");

  // Prevent cancellation if rental has started

  const now = new Date();

  if (booking.startDate && now >= new Date(booking.startDate)) {
    throw new Error("Cannot cancel a rental booking that has already started");
  }

  // Update booking status
  booking.status = "cancelled";

  
 // If it's a rental booking, update the car status back to available
  const car = await carModel.findById(booking.car);
    if (car) {
      car.status = "available";
      await car.save();
    }

  await booking.save();

  return booking;
};


export const getBookingsForDealer = (user) => {
 
  if (user.role  === "dealer") {

    return bookingModel.find({ dealer: user._id })
    .populate("car")
    .populate("user", "name email")
    .sort({ createdAt: -1 });
  
  }
};


