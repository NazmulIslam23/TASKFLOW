const express=require("express");
const crud=express();
const Port=3000;
const taskRoutes=require("./routes/taskRoutes");

crud.use(express.json());
crud.use("/tasks",taskRoutes);

crud.listen(Port,()=>
{
    console.log(`Server running port ${Port}`);
});