import Express from "express";
import {login } from "../controllers/auth.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = Express.Router()


router.get('/auth',verifyToken,(req,res,next)=>{
    res.send(200).json({message:"Token Verified"})
})
router.post('/authUser',login)   

export default router;