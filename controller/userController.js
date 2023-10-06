import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({path:"./.env"})

const SECRET_KEY=process.env.SECRET_KEY;

class UserController{
    static createUser= async (req,res)=>{
        try{
            const data = req.body;
            const docs=new userModel({
                _id: data.id,
                fullname: data.fullname,
                email: data.email,
                password: data.password
            });
            const result=await docs.save();
            res.send(result);

        }
        catch(err){ 
            console.log(err);
        }
        

    }
    
    static userAuthentication= async (req, res) => {
        try{
            const email=req.body.email;
            const password=req.body.password;
            const user=await userModel.findOne({email: email});
            if(user){
                if(user.email==email && user.password==password){
                    const token=jwt.sign({userid:user.id,fullname:user.fullname},SECRET_KEY,{expiresIn:"1d"});
                    res.send({message:"Authentication successful",token:token});
                }else{
                    res.send("Invalid credentials")
                }
            }else{
                res.send("Invalid credentials.");
            }
        }
        catch(err){
            console.log(err);
        }
    }
}


export default UserController;