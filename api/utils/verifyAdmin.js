import createError from "../utils/error.js";
import { verifyToken } from "./verifyToken.js"
export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }
        return next(createError(403,"Not authorized"))
    })
}