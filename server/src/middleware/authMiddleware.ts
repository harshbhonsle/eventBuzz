import {Request, Response,NextFunction } from "express";

import jwt from "jsonwebtoken";

import { ApiError } from "../utils/apiError";

export const authMiddleware = (roles: string[]=[])=>{
    return(req:Request, res:Response, next:NextFunction)=>{
        const token = req.cookies.authToken;
        if(!token) throw new ApiError(403,"No token provided");

        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET as string) as {id:string, role:string};
            if(roles.length && !roles.includes(decoded.role)){
                throw new ApiError(403,"Access denied");
            }
            (req as any).user = decoded;
            next();
        }
        catch(error){
            throw new ApiError(401,"Invalid Token")
        }
    }
}
