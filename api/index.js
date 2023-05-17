import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { connectToMongoDB } from './utils/mongoDBconnection.js'
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import hotelsRouter from './routes/hotels.js'
import roomsRouter from './routes/rooms.js'

// instantiate express
const app = express()
dotenv.config()

//REGISTER MIDDLEWARES
app.use(cookieParser())
app.use(express.json())

// register end points 
app.use('/api/auth',authRouter)
app.use('/api/users',usersRouter)
app.use('/api/hotels',hotelsRouter)
app.use('/api/rooms',roomsRouter)

// ERROR HANDLER MIDDLEWARE
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Some thing went wrong"
    return res.status(errorStatus).json({
        success:false,
        message:errorMessage,
        status:errorStatus,
        stack:err.stack
    })
})

app.listen(process.env.PORT,()=>connectToMongoDB())