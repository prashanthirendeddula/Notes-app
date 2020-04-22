const express=require("express")
const mongoose=require("mongoose")
const cors=require('cors')
const dbSetup=require('./config/dataBase')
const router=require('./config/routes')
const app=express()
const path=require('path')
//const port=3040
const port=process.env.PORT
app.use(express.static(path.join(__dirname,"client/build")))
//for heroku routers
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname+"/client/build/index.html"))
})
app.use(express.json())
app.use(cors())
app.use("/",router)
//db connection
dbSetup()

app.listen(port,()=>{
    console.log(port,'listening on port')
})