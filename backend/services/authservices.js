const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
const env=require("../config/envconfig")

module.exports.hashedpassword=async(password)=>{

    const salt=await bcrypt.genSalt(10);//10 is default value 

    const hash=await bcrypt.hash(password,salt)//not bycrypt works async
    

return hash;

}


module.exports.comparePassword=async(passowrd,dbPassword)=>{

const compare=await bcrypt.compare(passowrd,dbPassword)

return compare;


}



module.exports.tokencreation=(user)=>{
return jwt.sign(user, env.jwt_key, { expiresIn: '20d' });




}