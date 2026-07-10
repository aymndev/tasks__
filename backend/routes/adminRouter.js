const express=require('express')

const router = express.Router()
const {getPendingUsers,deleteUser,rejectUser, acceptUser, getStatistics}=require("../controllers/adminController")

router.get('/users/pending',getPendingUsers)
router.patch('/users/:id/accept',acceptUser)
router.delete('/users/:id/reject',rejectUser)
router.delete('/users/:id',deleteUser)
router.get('./statistics',getStatistics)

module.exports=router