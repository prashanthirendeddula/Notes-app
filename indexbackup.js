const express=require("express")
const mongoose=require("mongoose")
const app=express()
const port=3040
app.use(express.json())
//db connection
mongoose.connect("mongodb://localhost:27017/nov-notes-app")
.then(()=>{
    console.log('connected to db')
})
.catch(()=>{
    console.log(err)
})
//schema
const Schema=mongoose.Schema
const noteSchema=new Schema({
    title:{
        type:String
    },
    body:{
        type:String
    }
})
//Note
const Note=mongoose.model('Note',noteSchema)

//model
//setup apis
app.get('/notes',(req,res)=>{
    Note.find()
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
})
//post
app.post('/notes',(req,res)=>{
    const body=req.body
    const note=new Note(body)
    note.save()
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
})
//to get one record
app.get('/notes/:id',(req,res)=>{
    const id=req.params.id
    Note.findById(id)
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
})
app.put('/notes1/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    Note.findByIdAndUpdate(id,body,{new:true, runValidators:true})
        .then((note)=>{
            res.json(note)
        })
        .catch((err)=>{
            res.json(err)
        })
})
//delete
app.delete('/notes1/:id',(req,res)=>{
    const id=req.params.id
     Note.findByIdAndDelete(id)
           .then((note)=>{
               res.json(note)
           })
           .catch((err)=>{
               res.json(err)
           })
})

app.listen(port,()=>{
    console.log(port,'listening on port')
})