import { Request, Response } from "express";
import Event from "../models/Events";
import Booking from "../models/Booking";
import { ApiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandlers";
import { v4 as uuidv4 } from "uuid";
import { brotliDecompressSync } from "node:zlib";

// Student : Book Events
export const bookEvent = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // eventId
  const studentId = (req as any).user.id;

  const event = await Event.findById(id);
  if (!event) throw new ApiError(404, "Event Not Found");

  // Prevent duplicate booking
  const existing = await Booking.findOne({ event: id, student: studentId });
  if (existing) throw new ApiError(400, "Already booked by you");

  // Capacity check
  const count = await Booking.countDocuments({ event: id });
  if (count >= event.capacity) throw new ApiError(400, "Event is full");

  // Generate unique ticket ID
  const bookingId = `EVT-${new Date().getFullYear()}-${uuidv4().slice(0,6)}`;

  const booking = new Booking({
    bookingId,
    event: id,
    student: studentId
  });

  await booking.save();

  res.json({
    success: true,
    message: "Booking confirmed",
    bookingId,
    eventId: event._id
  });
});

export const cancelBooking = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // eventId
  const studentId = (req as any).user.id;

  const booking = await Booking.findOne({ event: id, student: studentId });
  if (!booking) throw new ApiError(400, "You have not booked this event");

  await booking.deleteOne();

  res.json({
    success: true,
    message: "Booking cancelled",
    eventId: id
  });
});

// Admin: view booking
export const getEventBookings = asyncHandler(async(req:Request, res:Response)=>{
    const {id} = req.params;
    const bookings = await Booking.find({event:id}).populate("student","email");
    res.json({success:true,bookings});
})