const express=require("express");
const router=express.Router();
/*
router.get("/",(req,res)=>
{
    res.send("Route working");
});
*/
const taskController = require("../controllers/taskController");

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.patch("/:id/complete", taskController.markCompleted);

module.exports = router;