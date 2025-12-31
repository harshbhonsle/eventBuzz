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

// admin : Update Event
export const updateEvent = asyncHandler(async(req:Request, res:Response)=>{
    const {id} = req.params;
    const updates = req.body;
    
    const event = await Event.findByIdAndUpdate(id,updates,{new:true});
    if(!event){
        throw new ApiError(404,"Event not found");
    }
    res.json({sucess:true, event});
})

// admin :delete event
export const deleteEvent = asyncHandler(async(req:Request, res:Response)=>{
    const {id} = req.params;
    const event = await Event.findByIdAndDelete(id);
    if(!event){
        throw new ApiError(404,"Event Not found");
    }
    res.json({success:true,message:"Event Deleted"})
})

// Students/admin : to get events
export const getEvents = asyncHandler(async(req:Request, res:Response)=>{
    const events = await Event.find().populate("createdBy", "email role"); 
    res.json({ success: true, events });
})