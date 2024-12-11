// const express = require('express');

// const app = express()

// // app.use('/hello',(req,res)=>{
// //    res.send("Hola amigo")
// // })

// // { by looking at these example we can say order of the route is very important in nodejs}

// // app.use('/hello/1',(req,res)=>{
// //     res.send("Helollloo")
// // })


// // advance routing

// // /ab?c - here b is optional means /ac or /abc both are same
// // /ab+c - /abc , /abbbbc, we can add as many 'b' it will work
// // ab*c - inplace of '*' we can add anything .

// // /a(bc)?d  - here '/abcd' and '/ad' both will work here , 'bc' is optional
// // /a(bc)+d - here '/abcbcbcbcd' ,here we can add as many as bc in between a and d.

// app.get(/.*fly$/,(req,res)=>{
//    res.send("Experimenting with regex again")
// })

// app.get('/user/:userId',(req,res)=>{
//    console.log(req.params);
//    res.send("experimenting with userId")
   
// })

// app.get(/a/,(req,res)=>{
//    res.send("Hi experimenting with regex")
// })


// app.get('/a(bc)?d',(req,res)=>{
//   res.send(" here '/abcd' and '/ad' both will work here , 'bc' is optional")
// })

// app.get('/user',(req,res)=>{
//    res.send({firstName: "Souvik",lastName: "Roy"})
// })

// app.post('/user',(req,res)=>{
//   // data posted succesfully
//   res.send("data saved successfully ")
// })

// app.use('/test', (req, res) => {
//     res.send("Hello from the server")
// })

// app.use('/getUsers', (req, res) => {
//     res.send("All users")
// })

// app.use('/', (req, res) => {
//     res.send("Hello Souvik")
//     //   (it acts as a wild card if anything comes after '/' it will not consider so we need to consider at the belowˀ)
// })

// app.listen(7777, () => {
//     console.log("Server is succesfully listening on port 7777");
// })