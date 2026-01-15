import express from "express";
import expressSession from "express-session";
import flash from "connect-flash";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";


const app = express();
let PORT = 4000 ;




app.get('/hello',(req,res)=>{
    res.send("hello world")
})

//  Middlewares 
//  yak koi chi function theen chizo me req ,res , next ka aceess hoga then it is called as middleware 



// **Middleware Explanation**  
// Jab bhi aap browser se koi **request** backend ko bhejte hain, toh wo apne **route** par jaati hai. Agar aap chaahte hain ki route par jaane se pehle request mein kuchh **check** karna ya kuchh **data add** karna ho, toh aise cases mein **middleware** use hota hai.  

// ### Middleware Ka Use:
// - **Validation:** Request ko process karne se pehle data check karna (e.g., token validation).
// - **Modification:** Request ke headers ya body mein kuchh naya data add karna.
// - **Authentication:** User ko authenticate karna route access se pehle.
  // Middleware request aur route ke beech ka ek **interceptor** hota hai, jo request ko handle karne se pehle kuch kaam perform karta hai.

//  Middle ware 1 
//   app.use((req,res,next)=>{
//     console.log("this is middleware")
//             console.log(req.url)
//     next()
//   })

//     Middle ware 2
//  cookie hota hai browser par data store karne ke liye 
// express session  server par data dave kar sakte ho 
// server restart karne se session expire ho jata hai ,sab kcuh session releated delete ho jata hai 

app.use(expressSession({
    secret:"nitesh",
    resave:false,
    saveUninitialized:true
}))
app.get("/create",(req,res,next)=>{
req.session.polo = true ;
res.send("session created");
})
app.get("/check",(req,res,next)=>{
console.log(req.session.polo)
    })

// Middle ware 3 
//  the isssue here with redirect is you cannot send data with reditrct so insted we use connect-flash 
app.get("/namaste",(req,res,next)=>{
    res.redirect("/hello")
})
//  to use  connect-flash express-sessions  must be configured 
app.use(flash());

app.get("/",(req,res,next)=>{
 req.flash("info","hello nitesh")
 res.redirect("/info")
})
app.get("/info",(req,res,next)=>{
    res.send(req.flash("info"))
})

//  cors 
//  broser me yak sssecurtiy feature hota hai jiske tehat kisi aur web domain ka data manga ya show nhai kar sakte hai , and browser yisase appko rokta hai , agar app chahate hai kii browser allow kare dat ko lane ke liye kisis dusare domain se , vo appko yusme website ke server par cors anable karna padega 
//  cors use karte hai  , koi domain par koi data send karte hai vo cors ka use karte hai

//  agar app chata ho ki koi particular route ke liye hii muje data sshare karna hai so app 
app.get("/shareable",cors() ,(req,res,next)=>{
    res.send("this is shareable data")
})
// app.use(cors()) // sare route  ke liye share able data using cors  


// cookie parser 
// server se kisi route se user ke browsers me kcuh store karna hai and server me kuchh store karne k liye cookie parser use karte hai
//  save karne ke liye package nahi lagta hai but read karne ke liye package lagta hai

app.get("/baned",(req,res,next)=>{
    res.cookie("banned","true"); // cookie ke yander banned save ho gaya hai 
    res.send("hello");
})
app.use(cookieParser())
app.get("/checkband",(req,res,next)=>{
console.log(req.cookies.banned)// cookie ke yander banned save ho gaya hai 
})


// morgan middleware 
// app.use(morgan("dev"))
app.use(morgan("combined"))
// app.use(morgan("short"))



  
//  by deault if nothing work it works , wild card 
//   request handler is alsways a middleware function 
app.get("*",(req,res,next)=>{
    console.log("404 not found")
})




app.listen(PORT,()=>{
  console.log("sever is running on port http://localhost:4000");                
})