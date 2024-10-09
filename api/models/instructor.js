const mongoose=require('mongoose')

const InstructorSchema=new mongoose.Schema({
    name:String,
    email:String,
    CalendyUrl:String,
    password:String,
    image:String,
})

const instructorModel=mongoose.model("instructors",UsersSchema)
module.exports=instructorModel