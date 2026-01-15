
// ?  ExpressJs 

// Library VS Framework
//*  Library
// A library is a collection of pre-written code that can be used to perform specific tasks., have more control in library
// eg - axios
//*  Framework
//?  A framework is a set of pre-written code that provides a structure for developing software applications , more control hold by framewrork only 
// eg - express


//    ? Express
// A Node.js web application framework that helps us to make web applications It is used for server side programming.
// 1 .  listen for imncomimng requests 
// 2   parse 
// 3 . match reponse with routes 
// 4 . suitable reponse for request

// * Ports  : -  are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

// Hmmm… can't reach this page localhost refused to connect. --> if server is not running or not listening , and we get this 

//  if server is listiening , but do not define any route we get this { // ! Cannot GET / }

// !  using require 
// const express = require('express')
// const app = express() 

//  ! using import
import express from 'express'
const app = express()


app.get('/' , (req,res)=>{
    res.send("Hello Express")
})


// ? app.use koi vhi requesti get post , put , patch ,delete  ,sare request ke liye ye send karega 
app.use("/",(req,res)=>{
    res.send("Hello Express kese ho universally ")
}) 


app.listen(3000 , ()=>{
    console.log("server is listening on the  port  3000")
})


// ! Routes 
//  It is  process of selecting a path for traffic in a network or between or across multiple netwroks.

app.get('/' , (req,res)=>{
    // console.log(req)
    res.send("Helloe kese ho ")
    res.send("<h1>Hello Express</h1>")
})



//  ! Path parameter
app.get("/:username",(req,res)=>{
    let {username}  = req.params
    res.send(username)
})


//  ! Query String
app.get("/search",(req,res)=>{
    console.log(req.query)
    res.send(req.query)
})
// http://localhost:3000/search?username=apple&color=green

//  Deafult route
app.get("*",(req ,res )=>{
    res.send("the path does not exits")
})