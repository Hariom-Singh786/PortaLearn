import mongoose from "mongoose";

//creating Schema
const courseSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    Category:String,
    image:String
})

//creating Model

const Course = mongoose.model("Course",courseSchema);

export default Course;
