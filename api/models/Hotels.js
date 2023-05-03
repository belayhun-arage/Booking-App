import mongoose, { mongo } from 'mongoose'
const {Schema}=mongoose;

const HotelSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    distance:{
        type:[String],
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    photos:{
        type:[String]
    },
    rooms:{
        type:Number,
        min:0,
        max:5
    },
    chepestPrice:{
        type:Number,
        require:true
    },
    featured:{
        type:Boolean,
        default:false
    },
})

export default mongoose.model("Hotel",HotelSchema) 