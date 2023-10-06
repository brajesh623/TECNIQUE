import taskModel from "../model/taskModel.js";

class TaskController{
    static createTask= async (req,res)=>{
        try{
            const data = req.body;
            const docs=new taskModel({
                _id: data.id,
                title: data.title,
                description: data.description,
                creationDate: data.creationDate,
                status: data.status
            });
            const result=await docs.save();
            res.send(result);

        }
        catch(err){ 
            console.log(err);
        }
        

    }
    static getAllTasks= async (req, res)=>{
        try{
            const result=await taskModel.find();
            res.send(result);
        }
        catch(err){
            console.log(err);
        }

    }

    static getTaskById= async (req, res)=>{
        try{
            const id=req.params.id;
            const result=await taskModel.findById(id);
            if(result){
                res.send(result);
            }else{
                res.send("Data not found");
            }
        }
        catch(err){
            console.log(err);
        }
    }

    static updateTaskById= async (req, res)=>{
        try{
            const id=req.params.id;
            const data=req.body;
            const result=await taskModel.findByIdAndUpdate(id,data);
            if(result){
                res.send(result);
            }else{
                res.send("Data not found");
            }
        }
        catch(err){
            console.log(err);
        }
    }

    static deleteTaskById= async (req, res)=>{
        try{
            const id=req.params.id;

            const result=await taskModel.findByIdAndDelete(id);
            if(result){
                res.send(result);
            }else{
                res.send("Data not found");
            }
        }
        catch(err){
            console.log(err);
        }
    }
}


export default TaskController;