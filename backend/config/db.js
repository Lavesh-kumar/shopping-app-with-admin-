const mongoose=require("mongoose");
const env=require("./envconfig")



const connect=async()=>{


try{

await mongoose.connect(env.DB)
console.log(`database connected at ${env.DB}`)
}catch(err){

console.log(err.message)

}




}

module.exports=connect