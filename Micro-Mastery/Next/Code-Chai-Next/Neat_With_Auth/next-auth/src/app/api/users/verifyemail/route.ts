import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';

connectDb();

export async function POST(request: NextRequest) {
   try {
       // Get token from query parameters
       const token = request.nextUrl.searchParams.get('token');
       console.log("Token:", token); // Consider removing this for security

    
       const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });


       if (!user) {
           return NextResponse.json({
               error: "Invalid token or token has expired",
               status: 400
           });
       }

       // Update user verification status
       user.isVerified = true;
       user.verifyToken = undefined;
       user.verifyTokenExpiry = undefined;

    
       await user.save();

       return NextResponse.json({
           message: "Email verified successfully",
           success: true
       });

   } catch (error) {
       console.error("Error:", error); // Better practice is to use console.error for errors
       return NextResponse.json({ error: "Invalid token", status: 400 });
   }
}
