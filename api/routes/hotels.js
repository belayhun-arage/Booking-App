import Express from "express";
import { createHotel,getHotels,getHotelById,updateHotel,deleteHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";
const router = Express.Router()

router.get('/',getHotels)

router.get("/:id",getHotelById)

router.post('/',verifyAdmin,createHotel)

router.put("/:id",verifyAdmin,updateHotel)

router.delete("/:id",verifyAdmin,deleteHotel)

export default router;