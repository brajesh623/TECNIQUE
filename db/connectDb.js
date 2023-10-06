import mongoose from "mongoose";

const connectDb=async (DATABASE_URL) => {
    try{
        const dbOption={
            dbname:"taskmanagement"
        }
        mongoose.connect(DATABASE_URL,dbOption)
        console.log("database connection established.");
    }
    catch(err){
        console.log(err);
    }
};

export default connectDb;