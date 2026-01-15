import mongoose from 'mongoose'
import { type } from 'os'


const userSchema = new mongoose.Schema({
    username:{
        type : String ,
        required : [true  , "Please Enter a username"],
        unique: [true , "Username already exists"],
    },
    email:{
        type : String ,
        required : [true  , "Please Enter a email"],
        unique: [true , "Email already exists"],
    },
    password : {
        type : String ,
        required : [true  , "Please Enter a password"],
    },
    isVerified:{
        type : Boolean ,
        default : false
    },
    isAdmin:{
        type : Boolean ,
        default : false
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,
    verifyToken : String,
    verifyTokenExpiry : Date
    
})

// next js edge par hota hia so  , export karne ka tarika alaga hoaga like 
//   yaha mongoose ko pata nahi chalta hai kii user first time coneetct huya hai ya kiten so hum pahale refereencing dege yuska kii agar pahale se hai to users ka refrecneededo ya to yaha create karo 
const Users = mongoose.models.Users || mongoose.model("Users" , userSchema);

export default Users ;