
import Course from "../model/course.model";


export const getCourse = async(req,res)=>{
    try {
        const course = await Course.find()
        res.status(200).json(); 
    } catch (error) {
        console.log(error)
    }
}