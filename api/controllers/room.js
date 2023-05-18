import Hotel from "../models/Hotel.js"
import Room from "../models/Rooms.js"

export const createRoom= async (req,res,next)=>{
    const hotelID=req.params.id
    const newRoom= new Room(req.body)
    try {
        const savedRoom = await newRoom.save()
        if(savedRoom){
            try {
                await Hotel.findByIdAndUpdate(
                    hotelID,
                    {$addToSet:{rooms:savedRoom._id}})
            } catch (error) {
                next(error)
            }
            res.status(200).json(savedRoom)
        }
    } catch (error) {
        next(error)
    }
}

export const getRooms= async (req,res)=>{
    try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getRoom= async (req,res)=>{
    try {
        const rooms = await Room.findById(req.params.id)
        res.status(200).json(rooms)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateRoom= async (req,res,next)=>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true})
        res.status(200).json(updatedRoom)
    } catch (error) {
        next(error)
    }
}

export const deleteRoom= async (req,res,next)=>{
    try {
        await Room.findByIdAndDelete(req.params.roomID)
        try {
            await Hotel.findByIdAndUpdate(
                req.params.hotelID,
                {$pull:{rooms:req.params.roomID}})
        } catch (error) {
            next(error)
        }
        res.status(200).json("Room has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}