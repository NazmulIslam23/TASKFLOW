const express=require("express");
const router=express.Router();
/*
router.get("/",(req,res)=>
{
    res.send("Route working");
});
*/
const taskController=require("../controllers/taskController");
router.get("/",taskController.getAllTasks);
router.get("/:id",taskController.getTaskByID);
router.post("/",taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id",taskController.deleteTask);
module.exports=router;