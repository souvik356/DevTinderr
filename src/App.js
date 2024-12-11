const { adminAuth,userAuth } = require('./middlewares/Auth')
const express = require('express')

const app = express()

//middleware

// example of middleware

// app.use('/admin',(req,res,next)=>{
//    const token = "xyz"
//    const isAuthorized = token === "xyz"
//    if(!isAuthorized){
//     res.status(401).send("Authorized access")
//    }
//    else{
//     next()
//    }
// })

// app.use('/admin', adminAuth)

// app.use('/user',userAuth,(req,res)=>{
//     try{
//         throw new Error("nfd")
//         res.status(200).send('sent users data')
//     }catch(err){
//        res.status(500).send("something went wrong please contact support team")
//     }
// })

// app.get('/admin/getUsers',(req,res)=>{
//     res.send('sent users data')
// })

// app.use('/admin/deleteUser',(req,res)=>{
//     res.send('Deleted user data')
// })

// app.use('/',(err,req,res,next)=>{
//    if(err){
//     res.status(500).send("something went wrong")   //middlware
//    }
// })

app.use('/user',(req,res,next)=>{
   console.log('Souvik 1');
   next()
})

app.use('/user',(req,res)=>{
   res.send('Hi this is Souvik 2')
})


app.listen('7777', () => {
    console.log('Server is running on port number 7777');
})