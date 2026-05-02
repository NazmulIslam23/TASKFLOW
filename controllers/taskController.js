/*
exports.getAllTasks=(req,res)=>
{
    res.send("controller working");
};
*/
const taskModel = require("../models/taskModel");
const { validateTask } = require("../utils/validator");

exports.getAllTasks = (req, res) => {
    let tasks = taskModel.getTasks();

    if (req.query.status) {
        tasks = tasks.filter(t => t.status === req.query.status);
    }

    if (req.query.search) {
        const keyword = req.query.search.toLowerCase();
        tasks = tasks.filter(t =>
            t.title.toLowerCase().includes(keyword) ||
            t.description.toLowerCase().includes(keyword)
        );
    }

    if (req.query.sort === "asc") {
        tasks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (req.query.sort === "desc") {
        tasks.sort((a, b) => b.title.localeCompare(a.title));
    }

    res.json(tasks);
};

exports.getTaskById = (req, res) => {
    const task = taskModel.findTaskById(req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
};

exports.createTask = (req, res) => {
    const errors = validateTask(req.body);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const { title, description, status } = req.body;

    const newTask = taskModel.addTask({
        title,
        description: description || "",
        status: status || "To Do"
    });

    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const errors = validateTask(req.body, true);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const updated = taskModel.updateTask(req.params.id, req.body);

    if (!updated) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(updated);
};

exports.deleteTask = (req, res) => {
    const deleted = taskModel.deleteTask(req.params.id);

    if (!deleted) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task Deleted" });
};

exports.markCompleted = (req, res) => {
    const task = taskModel.updateTask(req.params.id, {
        status: "Completed"
    });

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
};