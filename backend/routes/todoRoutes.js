
const express =require('express');
const router = express.Router();
const auth =require("../middleware/auth")

const {
    getTask,
    removeTask,
    createTask,
    updateTask,
    searchTask

}= require("../controllers/taskController")

router.get("/",auth, getTask);
router.post("/",auth, createTask);
router.delete("/:id",auth, removeTask);
router.put("/:id",auth,updateTask);
router.get("/search",auth,searchTask)


module.exports=router


