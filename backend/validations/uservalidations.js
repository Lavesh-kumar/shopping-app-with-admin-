const {body}=require("express-validator")


const registervalidations=[body('name').isLength({min:5}).trim().withMessage("name must contain 5 characters"),body('email').isEmail().trim().withMessage("Enter valid email"),body('password').isLength({min:7}).trim().withMessage("passowrd must contain 7 characters")]


const loginvalidations=[body('email').isEmail().trim().withMessage("Enter valid email"),body('password').isLength({min:7}).trim().withMessage("passowrd must contain 7 characters")]



module.exports={registervalidations,loginvalidations};