/*
exports.getAllTasks=(req,res)=>
{
    res.send("controller working");
};
*/
const taskModel=require("../models/taskModel");
exports.getAllTasks=(req,res)=>
{
    const tasks=taskModel.getTasks();
    res.json(tasks);
};

exports.createTask=(req,res)=>
{
    const {title,description,status}=req.body;
    if(!title)
    {
        return res.status(400).json({message:"Title required"});
    }
    const newTask=taskModel.addTask(
        {
            title:title,
            description:description || "",
            status:status || "To-Do"
        }
    );
    res.status(201).json(newTask);
};