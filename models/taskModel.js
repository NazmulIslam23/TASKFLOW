let tasks = [];
let idCounter = 1;

const getTasks = () => {
    return tasks;
};

const addTask = (task) => {
    task.id = idCounter++;
    tasks.push(task);
    return task;
};

const findTaskById = (id) => {
    return tasks.find(t => t.id == id);
};

const updateTask = (id, data) => {
    const task = findTaskById(id);
    if (!task) return null;

    if (data.title !== undefined) task.title = data.title;
    if (data.description !== undefined) task.description = data.description;
    if (data.status !== undefined) task.status = data.status;

    return task;
};

const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id == id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
};

module.exports = {
    getTasks,
    addTask,
    findTaskById,
    updateTask,
    deleteTask
};