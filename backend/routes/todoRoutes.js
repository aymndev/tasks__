
const express =require('express');
const router = express.Router();
const auth =require("../middleware/auth")

const {
    getTask,
    removeTask,
    createTask

}= require("../controllers/taskController")

router.get("/",auth, getTask);
router.post("/",auth, createTask);
router.delete("/:id",auth, removeTask);


module.exports=router