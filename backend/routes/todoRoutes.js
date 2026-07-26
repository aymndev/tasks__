
const express =require('express');
const router = express.Router();
const auth =require("../middleware/auth")

const {
    getTask,
    removeTask,
    createTask,
    updateTask

}= require("../controllers/taskController")

router.get("/",auth, getTask);
router.post("/",auth, createTask);
router.delete("/:id",auth, removeTask);
router.put("/:id",auth,updateTask)


module.exports=router