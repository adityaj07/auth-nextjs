import {connect} from "@/Config/dbConfig";
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

//mongoose connecting with db
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //create a new user
        const newUser = new User({
            username, 
            email, 
            password: hashedPassword
        })

        //save the user
        const savedUser  = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}