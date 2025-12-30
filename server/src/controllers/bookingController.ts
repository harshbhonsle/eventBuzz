import { Request, Response } from "express";
import Event from "../models/Events";
import { ApiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandlers";
import { v4 as uuidv4 } from "uuid";

// Student : Book Events
export const bookEvent = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const studentId = (req as any).user.id;

  const event = await Event.findById(id);
  if (!event) {
    throw new ApiError(404, "Event Not Found");
  }
  // check if event already booked by student
  if (event.attendees.includes(studentId)) {
    throw new ApiError(400, "Already booked by you");
  }

  // capacity check
  if (event.attendees.length >= event.capacity) {
    throw new ApiError(400, "Event is full");
  }
  // generate unique ticket id
  const ticketId = uuidv4();

  event.attendees.push(studentId);
  await event.save();
  res.json({
    success: true,
    message: "Booking confirmed",
    ticketId,
    eventId: event._id,
  });
});

// Student: Cancel Booking
export const cancelBooking = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const studentId = (req as any).user.id;

    const event = await Event.findById(id);
    if (!event) throw new ApiError(404, "Event not found");
    // Check if student booked
    if (!event.attendees.includes(studentId)) {
      throw new ApiError(400, "You have not booked this event");
    }
    // Remove student from attendees
    event.attendees = event.attendees.filter(
      (attendee) => attendee.toString() !== studentId
    );
    await event.save();
    res.json({
      success: true,
      message: "Booking cancelled",
      eventId: event._id,
    });
  }
);
