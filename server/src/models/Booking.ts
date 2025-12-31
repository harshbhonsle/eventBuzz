import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  bookingId: string;
  event: mongoose.Types.ObjectId;
  student: mongoose.Types.ObjectId;
  createdAt: Date;
}

const bookingSchema: Schema = new Schema({
  bookingId: { type: String, unique: true, required: true },
  event: { type: Schema.Types.ObjectId, ref: "Event", required: true },
  student: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IBooking>("Booking", bookingSchema);