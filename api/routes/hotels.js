import Express from "express";

const router = Express.Router()

router.post('/',async(req,res)=>{
    const newHotel= new Hotel(req.body)
    try {
        const savedHotel = newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;