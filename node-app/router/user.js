const express= require("express");
const user= require("../controller/user");

const router=express.Router();

router.post("/signup",user.Signup);

router.post("/login",user.Login);

module.exports=router;