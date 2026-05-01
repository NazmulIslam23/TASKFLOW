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
}
module.exports={
    getTasks,addTask
};