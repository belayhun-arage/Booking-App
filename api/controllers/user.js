import User from "../models/Users.js"
import createError from "../utils/error.js";
import {hashPassword} from "../utils/hash.js";
export const register=async (req,res,next)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:hashPassword(req.body.password)
    });
    try {
        await newUser.save()
        res.status(200).json("User registered successfully")
    } catch (error) {
        next(error)
    }
}

export const getUser=async (req,res,next)=>{
    try {
        const users = await User.findById(req.params.id);
        if(!users) return next(createError(404,"Users Not Found"))
        res.status(201).json({Users:users})
    } catch (error) {
        next(error)
    }
}

export const getAllUsers=async (req,res,next)=>{
    try {
        const users = await User.find();
        if(!users) return next(createError(404,"Users Not Found"))
        res.status(201).json({Users:users})
    } catch (error) {
        next(error)
    }
}

export const updateUser=async (req,res,next)=>{
    try {
        const users = await User.findOneAndUpdate(req.params.id);
        if(!users) return next(createError(404,"Users Not Found"))
        res.status(201).json({Users:users})
    } catch (error) {
        next(error)
    }
}

export const deleteUser=async (req,res,next)=>{
    try {
        const users = await User.findOneAndDelete(req.params.id);
        if(!users) return next(createError(404,"Users Not Found"))
        res.status(201).json({Users:users})
    } catch (error) {
        next(error)
    }
}