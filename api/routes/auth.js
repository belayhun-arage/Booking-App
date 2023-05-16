import Express from "express";
import {login } from "../controllers/auth.js";
const router = Express.Router()

router.post('/authUser',login)   

export default router;