const express=require("express")
const router=express.Router();

const {register,login} = require("../../controllers/users/userscontrollers");
const {registervalidations}=require("../../validations/uservalidations")
const {loginvalidations}=require("../../validations/uservalidations")

 





//userroutes
router.post("/register",registervalidations,register)
router.post("/login",loginvalidations,login)





module.exports=router;