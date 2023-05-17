import mongoose from "mongoose"
export const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        // mongoose events
        mongoose.connection.on('disconnected',()=>{
            console.log("MongoDB Disconnected!")
        })

        mongoose.connection.on('connected',()=>{
            console.log("MongoDB connected")
        })
     } catch (error) {
        throw error 
    }
}