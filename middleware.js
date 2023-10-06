// import expressJwt from "express-jwt";

// const authMiddleware=expressJwt({secret:SECRET_KEY,algorithm:["HS256"]});

// export default authMiddleware;
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({path:"./.env"})
const SECRET_KEY=process.env.SECRET_KEY;
const authenticationToken=(req,res,next)=>{
    try{
        const token = req.headers.authorization;
        
        if(!token){
            res.send({message:"Unauthorized"})
        }
        jwt.verify(token,SECRET_KEY,(err,user)=>{
           
            if(err){
                res.send({message:"Forbidden"});
            }
            req.user = user;
            next();
        })
    }
    catch(err){
        console.log(err);
    }
}

export default authenticationToken;