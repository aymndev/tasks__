
const express =require('express');
const router = express.Router();

const {
    getTask,
    removeTask,
    createTask

}= require("../controllers/taskController")

router.get("/", getTask);
router.post("/", createTask);
router.delete("/:id", removeTask);


module.exports=router