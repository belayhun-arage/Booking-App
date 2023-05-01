import Express from "express";

const router = Express.Router()

router.get('/',(req,res)=>{
    res.send("Authenticating user")
})  

router.get('/register',(req,res)=>{
    res.send("Registering New User")
}) 

export default router;