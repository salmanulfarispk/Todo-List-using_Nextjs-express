const express=require("express")
require("dotenv").config();
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const AllRoutes= require("./routes/Allroutes")

const PORT= process.env.PORT || 5000
const Db=process.env.MONGO_URI



//midleware 
app.use(express.json())
app.use(cors())


//mongodb connection
  mongoose.connect(Db)
 .then(()=> {
    console.log("connected to Database")
  })
 .catch((err)=> console.log("erorr connecting to database",err))




app.use("/api",AllRoutes)


app.listen(PORT,()=>{
 console.log("Running on ...", PORT)
})