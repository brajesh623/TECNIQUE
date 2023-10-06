import mongoose from "mongoose";

const user=new mongoose.Schema({
    _id:{type:"number", required:true},
    fullname:{type:"string", required:true},
    email:{type:"string", required:true},
    password:{type:"string", required:true, validate:(value)=>{value.length>=8}}
})
const userModel=mongoose.model("User",user);


export default userModel;