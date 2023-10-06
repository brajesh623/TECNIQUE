import express  from "express";
import connectDb from "./db/connectDb.js";
import routes from "./routes/router.js";
import cors from "cors";
import { rateLimit } from "express-rate-limit"; 
const app = express();
app.use(express.json());
app.use(cors());
const DATABASE_URL="mongodb+srv://brajesh623:root@cluster0.bt28elf.mongodb.net/?retryWrites=true&w=majority";
connectDb(DATABASE_URL);


app.use("/",routes);

const limiter=rateLimit({
    max:5,
    windowMs:60*60*1000,
    message:"Too many request from this IP"
});
app.use(limiter);

app.listen('8081',()=>{
    console.log('server is running on port 8081');
})