
// ?  Backend started 

// import Head from "next/head"
import { NextResponse } from "next/server"

export async function GET(req){
// for reponse 
//! Headers 
const headers = new Headers(req.headers)

// !Query Parameters 
//? const {searchParams} = new URL(req.url)
const searchParams = req.nextUrl.searchParams
// console.log(searchParams)
// console.log(searchParams.get("hello"))


return NextResponse.json({message:"hello kese ho "})
}

export async function POST(req){
    
    // request  body 
    // const {name,age} = await req.json();
    // console.log(name,age)

    // ? form data
//    const {name} = await req.formData(); // using like this giving undefined so ,
const formData= await req.formData();
console.log(formData.get('name')) // you will get the res


    
    return NextResponse.json({message:"hello kese ho post method "},{status:201})
} 

//  ! Dynamic routing 
// [proternameyouwnat] , that  will the folder name for that 

//! Api hitting 
//  If we're hitting any 3rd party api so instead of writing in front end we can try it in our bracket route .js folder so the third party api key then the password will be secure due to we are writing in our backend and then we are sending that back end in our front end by creating a api 

//  ? yiske bad humne mongos se fronte se data bheja form se aur yusko backend me accept karke db me store karwa ke frontpe show kar diya --> ye process ko karne ke liye alternative vhi hai 
//  ! Easy hai vo , nam hai Server Actions 
//  * server actions 
// ? yiske hum direct component me hii connectdb call akr ke query mar lete hai aur  vo data ko show kar dete hai , aur php me vhi wese hi hota hai  

//  but to use server actions in our copmpnent the compnent should be server component  the server actions doesn;t work in client compoennet , and we cannot use react hooks  there 


//  server actions as a post method 
import connectDb from "@/lib/connectDb";
import Post from "@/models/Post";

const create = async(formData)=>{
'use server'
await connectDb();
const res = await Post.create({
  title:formData.get('title'),
  body:formData.get('body')
})
console.log(res);


}

const PostData = async () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Create a Post</h2>
          <form className="space-y-6" action={create}>
          </form>
        </div>
      </div>
    );
  };
  
  export default PostData;
  

  //  ! Meta Data change
   
  export const metadata = {
    title:"Bolg posts",
    description:"This is blog posts"
  }
  //  yisko  hum then har tak different route ke liye different rakh satke hai   , but imp is that the name of the  object should be metadata



  //  ? To learn 
  //  middlwware 
  //  loading js 
  //  error js 
  //  note-found js 
  //  temnplate js 
  //  meta data files 
  