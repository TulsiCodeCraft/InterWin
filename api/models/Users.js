import mongoose from "mongoose";

const UsersSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UsersModel=mongoose.model("Users",UsersSchema)

export default UsersModel