import Express from "express";
import Hotel from "../models/Hotel.js"
import createError from "../utils/error.js"
import { createHotel,getHotels,getHotelById,updateHotel,deleteHotel } from "../controllers/hotel.js";
const router = Express.Router()

router.post('/',createHotel)

router.get('/',getHotels)

router.get("/:id",getHotelById)

router.put(":id",updateHotel)

router.delete(":id",deleteHotel)

export default router;