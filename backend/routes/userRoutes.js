

const express=require('express');
const router= express.Router();

const {getUser}= require("../controllers/userController");
const {createUser}= require("../controllers/userController");


router.get("/user",getUser)
router.post("/user",createUser)

module.exports = router
