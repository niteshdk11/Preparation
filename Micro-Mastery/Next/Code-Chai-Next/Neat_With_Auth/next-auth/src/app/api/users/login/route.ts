import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

connectDb();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        let { email, password } = reqBody;

        let user = await User.findOne({ email: email });

        if (!user) {
            return NextResponse.json({ error: "The user does not exist with this email", success: false });
        }

        let validPass = await bcrypt.compare(password, user.password);

        if (!validPass) {
            return NextResponse.json({ error: "The credentials are wrong", success: false });
        }

        // Generate JWT to store the data or token in cookie 
        if (!process.env.TOKEN_JWT) {
            return NextResponse.json({ error: "JWT secret not defined", status: 500 });
        }

        let tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        let token = jwt.sign(tokenData, process.env.TOKEN_JWT, { expiresIn: '1d' });

        let response = NextResponse.json({
            success: true,
            message: "Logged in successfully"
        });

        response.cookies.set("token", token, {
            httpOnly: true
        });

        return response; 
    } catch (error:any) {
        console.log("Error:", error.message); 
        return NextResponse.json({ error: "An error occurred", status: 400 });
    }
}
