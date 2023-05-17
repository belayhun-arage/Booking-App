import createError from "./error"
import { verifyToken } from "./verifyToken.js"
export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }
        return next(createError(403,"User not authorized"))
    })
}