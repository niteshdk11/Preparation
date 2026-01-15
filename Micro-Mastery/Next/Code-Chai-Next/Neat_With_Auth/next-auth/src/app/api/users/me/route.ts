import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest ,NextResponse} from 'next/server'
import {getUserIdFromJwt} from '@/utils/getUserId'

connectDb();


export async function POST(request:NextRequest){
    try {
  let id = await getUserIdFromJwt(request);
   let user = await User.findOne({_id:id}).select("-password")

   return NextResponse.json({
    message:"Userr found",
    data:user
   })


  if(!user){
    return NextResponse.json({error: "User not found"}, {status: 404})
  }


        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

