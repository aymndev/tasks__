

const express=require('express');
const router = express.Router();
const {
    getUser,
    createUser,
    removeUser
} = require("../controllers/userController");


router.get("/",getUser)
router.post("/",createUser)

router.delete("/:user_id", removeUser);

module.exports = router
