var express = require('express')
const User = require('../modules/user')
const router = express.Router()
const { body, validationResult } = require('express-validator');
// Create a user using: POST "/api/auth/createuser" . doesnt require auth

router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 5 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({ min: 5 }),
    ] , (req,res)=>{
    const errors = validationResult(req)
    //Returning the error message if the requirement is not met
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const user = User(req.body)
    user.save() 
    res.send(req.body) 
})

module.exports = router