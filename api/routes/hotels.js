import Express from "express";
import Hotel from "../models/Hotel.js"
import createError from "../utils/error.js"
const router = Express.Router()

router.get('/',async (req,res,next)=>{
    const failed=true
    const status=403
    const message="You are not authenticated"
    if(failed) return next(createError(status, message))
    try {
        const hotels= await Hotel.findById("090909");
        res.send({data:hotels})   
    } catch (error) {
        next(error)
    }
})

router.get('/:id',async (req,res,next)=>{
    const param = req.params.id
    try {
        const hotel= await Hotel.findById(param);
        res.send({data:hotel})   
    } catch (error) {
        next(error)
    }
})

router.post('/',async(req,res)=>{
    const newHotel= new Hotel(req.body)
    try {
        const savedHotel = newHotel.save()
        console.log(savedHotel)
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;