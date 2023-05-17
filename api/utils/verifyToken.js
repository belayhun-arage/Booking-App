import Jwt from "jsonwebtoken";
import createError from "../utils/error.js";

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token
    if(!token) {
        return next(createError(401,"User Not Authenticated"))
    }
    Jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err) return next(createError(403,"Not Valid Token"))
        req.user=user
        next()
    })
}