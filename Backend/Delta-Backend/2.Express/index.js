// const express = require('express')
// const app = express() 

import express from 'express'
const app = express()


// app.use("/",(req,res)=>{
//     res.send("Hello Express kese ho universally ")
// })

// for promsie we are using  (resolve, reject ) rememeber 


app.get('/home' , (req,res)=>{
    // console.log(req)
    res.send("Helloe kese ho ")
    // res.send("<h1>Hello Express</h1>")  // error milega 
})


// app.get("*",(req ,res )=>{
//     res.send("the path does not exits")
// })

app.get("/search",(req,res)=>{
    console.log(req.query)
    res.send(req.query)
})
// http://localhost:3000/search?username=apple&color=green


// Path parameter
app.get("/:username",(req,res)=>{
    let {username}  = req.params
    res.send(username)
})    




app.listen(3000 , ()=>{
    console.log("server is listening on the  port  3000")
})