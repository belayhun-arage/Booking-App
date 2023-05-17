import Express from "express";
import {login } from "../controllers/auth.js";
import { verifyToken } from "../utils/verifyToken.js";
import { verifyUser } from "../utils/verifyUser.js";
const router = Express.Router()


router.get('/verifyToken',verifyToken,(req,res,next)=>{
    res.send("Token Verified")
})
router.get('/verifyUser/:id',verifyUser,(req,res,next)=>{
    res.send("User Verified")
})
router.get('/verifyAdmin',verifyUser,(req,res,next)=>{
    res.send("User Verified")
})
router.post('/authUser',login)   

export default router;