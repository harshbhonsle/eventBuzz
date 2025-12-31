import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "../controllers/eventController";
import { bookEvent, cancelBooking,getEventBookings } from "../controllers/bookingController";

const router = express.Router();
router.post("/", authMiddleware(["admin"]), createEvent);
router.get("/", authMiddleware(["admin", "student"]), getEvents);
router.post("/:id/book", authMiddleware(["student"]), bookEvent);
router.post("/:id/cancel", authMiddleware(["student"]), cancelBooking);

// update and delete
router.put("/:id", authMiddleware(["admin"]), updateEvent);
router.delete("/:id", authMiddleware(["admin"]), deleteEvent);

// admin side : get all events
router.get("/:id/bookings", authMiddleware(["admin"]), getEventBookings);
export default router;
