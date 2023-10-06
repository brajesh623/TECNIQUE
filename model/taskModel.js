import mongoose from "mongoose";

const task=new mongoose.Schema({
    _id:{type:"number", required:true},
    title:{type:"string", required:true},
    description:{type:"string", required:true},
    creationDate:{type:"date", required:true},
    status:{type:"string", required:true}
})
const taskModel=mongoose.model("Task",task);

export default taskModel;