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

// register the auth middleware 
app.use('/auth',authRouter)

app.use('/api/users',usersRouter)
app.use('/auth/hotels',hotelsRouter)
app.use('/auth/rooms',roomsRouter)


app.get('/',(req,res)=>{
    res.send("Hello for the first request");
})

app.listen('8000',()=>{
    connect()
    console.log("Serving ")
})