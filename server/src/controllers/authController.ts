import {Request, Response} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User"

import { asyncHandler } from "../utils/asyncHandlers";
import {errorHandler} from "../middleware/errorHandler"
import { ApiError } from "../utils/apiError";

// register -> email, password , 
export const register = asyncHandler(async(req:Request, res:Response)=>{
    const {email, password,role} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User({email, password:hashedPassword,role});
    await user.save();
    
    res.status(201).json({message:"User registered successfully"});
})


// login -> 
export const login = asyncHandler(async(req:Request, res:Response)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        throw new ApiError(401,"User not Found");
    }

    // if user found
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new ApiError(401, "Invalid password/email. Check again.")
    }

    const token = jwt.sign(
        {id:user._id,role:user.role},
        process.env.JWT_SECRET as string, 
        { expiresIn: "1h" }
    )
    res.json({ token });
})