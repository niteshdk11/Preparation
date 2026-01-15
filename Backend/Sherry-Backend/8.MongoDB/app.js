import express from "express";
import mongooseCollection from "./config/mongoose.js";
import {userModel} from "./models/user.js";
import {postsModel} from "./models/posts.model.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.send("Hello World!");
}); 


// ## ? ? Advance  commands Mongodb 
const userData = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
      isMarried: false,
      age: 28
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      password: "securepass",
      isMarried: true,
      age: 34
    },
    {
      name: "Michael Brown",
      email: "michaelbrown@example.com",
      password: "passmike321",
      isMarried: false,
      age: 30
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      password: "emily1234",
      isMarried: true,
      age: 29
    },
    {
      name: "Chris Johnson",
      email: "chrisjohnson@example.com",
      password: "cjstrongpassword",
      isMarried: false,
      age: 27
    },
    {
      name: "Sarah Wilson",
      email: "sarahwilson@example.com",
      password: "wilson789",
      isMarried: true,
      age: 32
    },
    {
      name: "David Miller",
      email: "davidmiller@example.com",
      password: "millerpwd",
      isMarried: false,
      age: 35
    },
    {
      name: "Laura Taylor",
      email: "laurataylor@example.com",
      password: "laura9876",
      isMarried: false,
      age: 31
    },
    {
      name: "Daniel Martinez",
      email: "danielmartinez@example.com",
      password: "danielpass567",
      isMarried: true,
      age: 40
    }
  ];
  


//  ? Insert many 

app.get("/insertusers", async (req, res) => {
    const response = await userModel.insertMany(userData);
    res.send(response); 
})

app.get("/usersfilter",async  (req, res) => {
    //    let data = await userModel.find({name:"John Doe"});
    
    // ? eq oprator 
    let data = await userModel.find({name: {$eq: "John Doe"}});

    //  ? not equal
    // let data = await userModel.find({age: {$ne: 34}});
    //  ? lt --> Less than 
    // let data = await userModel.find({age: {$lt: 30}});
    
    //  ? lt --> Less than & equal  
    // let data = await userModel.find({age: {$lte: 30}});
    
    //  ? gt --> greater than 
    // let data = await userModel.find({age: {$gt: 30}});
    // let data = await userModel.find({age: {$gte: 30}});

    //  ? in 
    // let data = await userModel.find({name: {$in: ["John Doe", "Jane Smith"]}});
    // let data = await userModel.find({age: {$in: [23 ,30 ,27]}});
    //  ?not in 
    // let data = await userModel.find({age: {$nin: [23 ,30 ,27]}});
    // let data = await userModel.find({isMarried: {$nin: false} });
    // let data = await userModel.find({isMarried: {$nin: [false]} });
    
    // ?? vo filed exit karta hai yan ahi 
    // let data = await userModel.find({isAdmin: {$exists: true} });
    // let data = await userModel.find({isAdmin: {$exists: 0} });
    
    // ? and oprator 
    // let data = await userModel.find({
    //     $and: [
    //         {age: {$gte: 30}},
    //         {isMarried: true}
    //     ]});

    //  ? or oprator
    // let data = await userModel.find({
    //     $or: [
    //         {age: {$gte: 30}},
    //         {isMarried: true}
    //     ]});

    // ?  * regex
// ?  start with - ^  -- ^H
// ? ens with - $  --and$
// ? in middle n number of letters .* 
//  ^a.*b$

// let data = await userModel.find({name: {$regex: /.*r$/i} });

    res.send(data);
})

// ? JOi validation 

// app.get("/datai", async (req, res) => {
//        let user = {
//         name: "Jane Smith",
//         email: "janesmith@example.com",
//         password: "securepass",
//         isMarried: true,
//         age: 34
//       };
//     const error = validateUser(user);
//       if(error){
//         return res.send(error);
//       }
   

//     const response = await userModel.create( user);

//     res.send(response); 
// })


// ? Embedding 
// app.get("/:username/posts/create",async (req, res) => {

//     let user =  await userModel.findOne({name:{$eq:`${req.params.username}`}});
//     // console.log(user);
//     user.posts.push({content: "I love my country", date: Date.now()});
//     //  ye shorif temperory save hoag actually me data bas emse save nai ho gat o save karwa ne keliye we can use 
//     await user.save()
//     res.send(user);
// })

app.get("/:username/posts/create",async (req, res) => {

    let user =  await userModel.findOne({name:{$eq:`${req.params.username}`}});
    let post = {
        user: user._id,
        content: "I love my country",
        date: Date.now()
    } 
    let postC = await  postsModel.create(post);
  user.posts.push(postC._id);
        await user.save()
    res.send([user , postC]);
})

app.get("/posts", async (req, res) => {
    let posts = await postsModel.find().populate("user");
    res.send(posts);
})

app.get("/users", async (req, res) => {
    let user = await userModel.find().populate("post");
    res.send(user);
})









app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000");
})
