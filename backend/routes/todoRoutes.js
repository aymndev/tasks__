
const express =require('express');
const router = express.Router();
const auth =require("../middleware/auth")

const {
    getTask,
    removeTask,
    createTask,
    updateTask,
    searchTask,
    getTaskCategories

}= require("../controllers/taskController")

router.get("/",auth, getTask);
router.get('/stats',auth,getTaskCategories)
router.get("/search",auth,searchTask);
router.post("/",auth, createTask);
router.delete("/:id",auth, removeTask);
router.put("/:id",auth,updateTask);



module.exports=router


