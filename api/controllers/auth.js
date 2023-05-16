import User from "../models/Users.js"
import createError from "../utils/error.js";
import {isCorrectPassword} from "../utils/hash.js";
import jwt from "jsonwebtoken"
export const login=async (req,res,next)=>{
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user) return next(createError(404,"User not found!"))
        const isPasswordCorrect= isCorrectPassword(req.body.password,user.password)
        if(!isPasswordCorrect) return next(createError(403,"User Password Is Not Correct!"))
        const {password,isAdmin,...otherDetails}=user._doc
        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET_KEY)
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json({user:otherDetails})
    } catch (error) {
        next(error)
    }
}