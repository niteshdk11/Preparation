import mongoose from "mongoose";
import Joi from "joi";

// ? embedding 
// const postsSchema = new mongoose.Schema({
    
//         content: String ,
//         date: {
//             type: Date,
//             default: Date.now
//         }
    
// })
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     isMarried: {
//         type: Boolean,
//         default: false 
//     } ,
//     age:{
//         type: Number,
//         required: true
//     },
//     // ? Embedding 
//     posts :[
//        postsSchema
//     ]
// })




const userSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
age:{
    type: Number,
    required: true
},
// ? referencing
post :[{
    type : mongoose.Schema.Types.ObjectId,
    ref:'post' 
}]
})












// function validateUser(data){
//     const schema = Joi.object({
//         name: Joi.string().min(2).max(50).required(),
//         email: Joi.string().min(5).max(255).required().email(),
//         password: Joi.string().min(5).max(1024).required(),
//         age: Joi.number().min(10).max(100).required(),
//         isMarried: Joi.boolean().default(false)
//     })

//     let {error} = schema.validate(data)
    
    
//     return error?.details[0]?.message ;
// }

export const userModel = mongoose.model("user", userSchema);
// export { validateUser };

