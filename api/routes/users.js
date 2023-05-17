import Express from "express";
import {register,getAllUsers,updateUser,deleteUser,getUser} from '../controllers/user.js'
import { verifyUser } from "../utils/verifyUser.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";
const router = Express.Router()

router.post('/register',register)
router.put('/:id',verifyUser,updateUser)
router.delete('/:id',verifyUser,deleteUser)
router.get('/:id',verifyUser,getUser)
router.get('/',verifyAdmin,getAllUsers)

export default router;