import mongoose, { model } from "mongoose";

const toDoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    }
   
})

const toDoList = mongoose.model("toDoList",toDoSchema)
export default toDoList