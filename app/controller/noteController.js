const Note=require('../models/note')

//to get all
module.exports.list=(req,res)=>{
    Note.find().populate('category')
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Note.findById(id)
    .then((note)=>{
        if(note){
        res.json(note)
        }
        else{
            res.json({})
        }
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    const note=new Note(body)
    note.save()
       .then((note)=>{
           res.json(note)
       })
       .catch((err)=>{
           res.json(err)
       })
}
module.exports.remove=(req,res)=>{
    const id=req.params.id
     Note.findByIdAndDelete(id)
           .then((note)=>{
            res.json(note)
        })
           .catch((err)=>{
               res.json(err)
           })

}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Note.findByIdAndUpdate(id,body,{new:true, runValidators:true})
        .then((note)=>{
            res.json(note)
        })
        .catch((err)=>{
            res.json(err)
        })
}
