import {Request, Response } from "express";
import Event from "../models/Events"; 
import { ApiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandlers";

// Admin :Create Event

export const createEvent = asyncHandler(async(req:Request, res:Response)=>{
    const { title, description, date, location, capacity } = req.body;

    const event = new Event({
        title,
        description,
        date,
        location,
        capacity,
        createdBy:(req as any).user.id
    })
    await event.save(); res.status(201).json({ success: true, event });
});

// Students/admin : to get events
export const getEvents = asyncHandler(async(req:Request, res:Response)=>{
    const events = await Event.find().populate("createdBy", "email role"); 
    res.json({ success: true, events });
})