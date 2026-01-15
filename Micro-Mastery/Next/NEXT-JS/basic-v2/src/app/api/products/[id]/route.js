import { NextResponse } from "next/server"


// export const GET = async(req,context)=>{
export const GET = async(req,{params})=>{
     const {id} = await params
      console.log(id)
    //  ? to get the params   

    return NextResponse.json({"keseho tum ":1212})
    
}