const express=require('express')

const router = express.Router()
const {getPendingUsers,deleteUser,rejectUser, acceptUser, getStatistics, addUser,getAllUsers,DeteleUser}=require("../controllers/adminController")
router.get("/users", getAllUsers);
router.get('/users/pending',getPendingUsers)
router.patch('/users/:id/accept',acceptUser)
router.delete('/users/:id/reject',rejectUser)
router.delete('/users/:id',deleteUser)
router.delete("/users/:id", DeteleUser);
router.get('/statistics',getStatistics)
router.post("/users",addUser)

module.exports=router