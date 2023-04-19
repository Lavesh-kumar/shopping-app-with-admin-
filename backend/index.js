const cors =require('cors')
const express=require("express")
const env=require("./config/envconfig")
const connect=require("./config/db")
const userrouter=require("./routes/users/userroutes");








//server
const app=express();
const port=env.PORT||5000;
//database connection
connect();
app.use(cors());
app.get("/",(req,res)=>{
res.send("homeroutes")

})

//add middlewares
app.use(express.json())
app.use('/api',userrouter);
app.use(express.urlencoded({extended:true}))


app.listen(port,()=>{
console.log(`server is running ap port at ${port}`)
})