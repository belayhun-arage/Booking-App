import mongoose, { mongo } from "mongoose";
const {Schema}=mongoose.Schema();
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
 });

//  atache the schema to the user model
const userModel = mongoose.model('Users', userSchema);