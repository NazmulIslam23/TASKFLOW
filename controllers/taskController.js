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