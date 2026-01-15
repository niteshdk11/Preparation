
//  using get method we can acees data from the req.query 

//  we get that data in req.body but the express does't support this method or do not understand that stuff , so we need to do some configuration so express can read that data
//  by deafult req.body undeifined deta hai agar yusko batya nahi hai kii data kis format me read karna hai to batane ke liye hum ye config karte hai 

app.use(express.urlencoded({extended: true})); // app.use sare request ke liye kam karega  , aur koi vhi urlencoded data ko parese kardega express avi
app.use(express.json()); // for handling the json data or to read the json data

// ?  client side 
{/* <form action="http://localhost:3000/register" method="post">
<input type="text" name="name" id="" placeholder="Enter Name">
<input type="password" name="password" id="" placeholder="Enter password">
<button>Register</button>
</form> */}

// ?   server side 
app.post("/register", (req, res)=>{
    let {name, password} = req.body;
    res.send("Hello this is post method " + name );
})

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++