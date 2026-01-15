import connectDb from "@/lib/connectDb";
import Post from "@/models/Post";

const { NextResponse } = require("next/server");
export async function GET(req){
      await connectDb();
    
    //   const post = {
    //     title:"this is the bad post",
    //     body:"the body is too good , it is healthy also "
    //   }
    //   const p = new Post(post);
    //  await p.save();

    const result = await Post.find()



    return NextResponse.json({
        message:"success",result
    },{
        status:200
    })
}