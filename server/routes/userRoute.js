const router= require('express').Router()
const userController=require('../controller/userController')


router.post("/registerUser",userController.add_user)

module.exports=router