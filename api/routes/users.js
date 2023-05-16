import Express from "express";
import {register,getAllUsers} from '../controllers/user.js'
const router = Express.Router()

router.post('/register',register)
router.get('/',getAllUsers)

export default router;