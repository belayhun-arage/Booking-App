import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app=express()
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

app.get('/',(req,res)=>{
    res.send("Hello for the first request");
})

app.listen('8000',()=>{
    connect()
    console.log("Serving ")
})