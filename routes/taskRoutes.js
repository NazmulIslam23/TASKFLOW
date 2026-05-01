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
module.exports=router;