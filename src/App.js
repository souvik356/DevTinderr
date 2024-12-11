const express = require('express')
const { connectDb } = require('../utils/Database')
const app = express()
const {User}= require('../src/models/User')

app.post('/signup',async (req,res)=>{
   const userObj = {
    firstName : "Sachin",
    lastName: "Tendulkar",
    emailID :"tendulkar@gmail.com",
    password :"Sachin@123"
   }
   const user = new User(userObj)
   await user.save().then(()=>{
    res.send('User added succesfully')
    console.log("Data stored in Database");
   }).catch((err)=>{
    console.error('Data is not saved');
   })
})

connectDb().then(()=>{
    console.log("Database connection succesful");
    app.listen(3000,()=>{
        console.log('succesfully connected to port number 3000');
    })
}).catch((err)=>{
   console.error("Database connection is not succesful");
})