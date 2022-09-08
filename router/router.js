const express=require('express')
const router=express.Router()
const controllers=require('../controllers/controllers')

router.get('/',controllers.home)
router.post('/db',controllers.db)

module.exports=router
