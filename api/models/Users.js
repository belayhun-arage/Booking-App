import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        unique:true
    },
    isAdmin: {
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
});

//  atache the schema to the user model
export default mongoose.model('User', userSchema);