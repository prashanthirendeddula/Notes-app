const express=require("express")
const mongoose=require("mongoose")
const cors=require('cors')
const dbSetup=require('./config/dataBase')
const router=require('./config/routes')
const app=express()
const port=3040
app.use(express.json())
app.use(cors())
app.use("/",router)
//db connection
dbSetup()

app.listen(port,()=>{
    console.log(port,'listening on port')
})