const mongoose=require('mongoose');
//now we define schemas in mongodb
const userschema=mongoose.Schema({


    name:{
        type:String,
required:true        
        
    },
    email:{
        type:String,
        required:true
    },
    phone:{

        type:Number,
        required:true  
    },

admin:{

required:true,
type:Boolean,
default:false

},
 password:{
 type:String,
 required:true
    }
    

},{timestamps:true});

//create model

const usermodel=mongoose.model("user",userschema);//hew2re a collection create in mongodb by model.the function of mongoose
module.exports=usermodel;