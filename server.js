const express=require("express");
const crud=express();
const Port=3000;

crud.use(express.json());

crud.listen(Port,()=>
{
    console.log(`Server running port ${Port}`);
});
crud.get("/testing",(req,res)=>
{
    res.send("API is working");
});