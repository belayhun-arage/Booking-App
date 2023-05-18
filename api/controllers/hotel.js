import Hotel from "../models/Hotel.js"

export const createHotel= async (req,res)=>{
    const newHotel= new Hotel(req.body)
    try {
        const savedHotel = newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getHotels=async (req,res)=>{
    try {
        const hotels= await Hotel.find();
        res.status(200).json({hotels:hotels})   
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getHotelById=async (req,res)=>{
    try {
        const hotel= await Hotel.findById(req.params.id);
        res.status(200).json({Hotel:hotel})   
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateHotel=async (req,res)=>{
    try {
        const hotel= await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true});
        res.send({data:hotel})   
    } catch (error) {
        const status=error.status || 500
        const message=error.message || "Something Went Wrong!"
        next(createError(status, message))
    }
}

export const deleteHotel=async (req,res)=>{
    try {
        const response= await Hotel.findByIdAndDelete(req.params.id);
        res.send(response)   
    } catch (error) {
        const status=error.status || 500
        const message=error.message || "Something Went Wrong!"
        next(createError(status, message))
    }
}

export const countByCity=async (req,res,next)=>{
    const cities=req.query.cities.split(",")
    try {
        const list=await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }));
        res.status(200).json(list)   
    } catch (error) {
        res.status(500).json(error)
    }
}