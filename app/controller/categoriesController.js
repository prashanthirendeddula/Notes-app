const Category=require('../models/category')
const Note=require('../models/note')
//to get all
module.exports.all=(req,res)=>{
    Category.find()
    .then((categories)=>{
       res.json(categories)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    category=new Category(body)
    category.save()
    .then((categories)=>{
        res.json(categories)
     })
     .catch((err)=>{
         res.json(err)
     })
 
}
module.exports.show=(req,res)=>{
    const id=req.params.id
   Promise.all([Category.findById(id),Note.find({category:id})])
        .then((values)=>{
            const[category,notes]=values
            res.json({
                category,notes
            })
            .catch((err)=>{
                res.json(err)
            })
        })
}
module.exports.remove=(req,res)=>{
    const id=req.params.id
    Category.findByIdAndDelete(id)
    .then((categories)=>{
        res.json(categories)

     })
     .catch((err)=>{
         res.json(err)
     })
 
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Category.findByIdAndUpdate(id,body,{new:true, runValidators:true})
    .then((categories)=>{
        res.json(categories)

     })
     .catch((err)=>{
         res.json(err)
     })
 
}