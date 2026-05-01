let tasks=[];
let idCounter=1;
const getTasks=()=>
{
    return tasks;
};
const addTask=(task)=>
{
    task.id=idCounter++;
    tasks.push(task);
    return task;
};
const findTaskByID=(id)=>
{
    return tasks.find(t=>t.id==id);
};
module.exports={
    getTasks,addTask,findTaskByID
};