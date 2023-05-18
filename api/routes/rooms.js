import Express from "express";
import { getRooms,getRoom,createRoom,updateRoom,deleteRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";

const router = Express.Router()

router.get('/',getRooms)

router.get("/:id",getRoom)

router.post('/:id',createRoom)

router.put("/:id",updateRoom)

router.delete("/:roomID/:hotelID",deleteRoom)

export default router;