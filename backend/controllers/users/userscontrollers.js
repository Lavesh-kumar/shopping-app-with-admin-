const { json } = require("express");
const {validationResult}=require("express-validator");
const usermodel=require("../../models/user")
const {hashedpassword, tokencreation}=require("../../services/authservices")
const {comparePassword}=require("../../services/authservices")
//@POST api/register
//@access public
//@store data in database 

const register=async(req,res)=>{

    const errors=validationResult(req);
    console.log(errors.array());
    if(errors.isEmpty()){
//register the new user and store in to database




const {name,email,phone,password}=req.body;
const emailExist= await usermodel.findOne({email:email})

if(!emailExist){


const hashed=await hashedpassword(password);//calling the function present in services/authservices. which hash the password using bycrpt package

const registeruser=await usermodel.create({

name:name,
email:email,
phone:phone,
admin:true,
password:hashed


})
//validation successful
res.status(201).json({"msg":"user created successfully"})

}else{
//validation failed
res.status(401).json({"errors":[{msg:`${email} already exists`}]})
}


}else{

        return res.status(400).json({errors:errors.array()});
    }
    


    }




const login=async(req,res)=>{
    const {email,password}=req.body;
    const errors=validationResult(req);
    if(errors.isEmpty()){

//check does email exist or not

const checkUser=await usermodel.findOne({email:email})
if(checkUser){

 //@compare password using bycrpt package   
const dbPassword=checkUser.password;
if(await comparePassword(password,dbPassword)){
const token=tokencreation({name:checkUser.name,id:checkUser._id})
if(checkUser.admin){

    res.status(201).json({token,admin:true})

}else{
    
 res.status(201).json({token,admin:true})

}
 

}else{
res.status(401).json({errors:[{msg:"password does not matched"}]})
}

}else{
res.status(401).json({errors:[{msg:`${email} does not Exist`}]})
}



}else{
console.log(errors)
res.status(400).json({errors:errors.array()})

}




}
module.exports={login,register}