//  GET & POST Request 
import express from "express";

const app = express();


app.use(express.urlencoded({extended: true})); // app.use sare request ke liye kam karega  , aur koi vhi urlencoded data ko parese kardega express avi
app.use(express.json()); // for handling the json data or to read the json data


app.get("/register", (req, res)=>{
    let {name, password} = req.query;
    console.log(name, password);
    res.send("Hello this is get method ");
})


app.post("/register", (req, res)=>{
    let {name, password} = req.body;
    res.send("Hello this is post method " + name );
})





app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})