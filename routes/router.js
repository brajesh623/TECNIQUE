import TaskController from "../controller/taskController.js";
import UserController from "../controller/userController.js";
import express from "express";
import authenticationToken from "../middleware.js";

const routes=express();

routes.post("/tasks",TaskController.createTask);
routes.get("/tasks",authenticationToken,TaskController.getAllTasks);
routes.get("/tasks/:id",TaskController.getTaskById);
routes.put("/tasks/:id",TaskController.updateTaskById);
routes.delete("/tasks/:id",TaskController.deleteTaskById);

routes.post("/user",UserController.createUser);
routes.post("/login",UserController.userAuthentication);


export default routes;