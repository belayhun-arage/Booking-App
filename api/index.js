import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import hotelsRouter from './routes/hotels.js'
import roomsRouter from './routes/rooms.js'

const app = express()
dotenv.config()

const connect=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
     } catch (error) {
        throw error 
     }
}

// mongoose events
mongoose.connection.on('disconnected',()=>{
    console.log("MongoDB Disconnected!")
})

mongoose.connection.on('connected',()=>{
    console.log("MongoDB connected")
})
// 
app.use(express.json())

// register the auth middleware 
app.use('/auth',authRouter)

app.use('/api/users',usersRouter)
app.use('/api/hotels',hotelsRouter)
app.use('/api/rooms',roomsRouter)

app.get('/',(req,res)=>{
    res.send("Hello for the first request");
})

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

app.listen('8000',()=>{
    connect()
    console.log("Serving ")
})