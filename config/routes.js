const express=require('express')
const router=express.Router()
const noteController=require('../app/controller/noteController')
const categoriesController=require('../app/controller/categoriesController')
router.get('/notes',noteController.list)
router.get('/notes/:id',noteController.show)
router.post('/notes',noteController.create)
router.delete('/notes/:id',noteController.remove)
router.put('/notes/:id',noteController.update)

router.get('/categories',categoriesController.all)
router.post('/categories',categoriesController.create)
router.get('/categories/:id',categoriesController.show)
router.delete('/categories/:id',categoriesController.remove)
router.put("/categories/:id",categoriesController.update)


module.exports=router
