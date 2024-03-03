import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";


connect()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody);

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({message: "User already exists"})
        }

        const salt = await bcryptjs.genSalt(12)
        const hashedPassword = await bcryptjs.hash(password, 12)


        const newUser=new User({
            username,
            email,
            password: hashedPassword
        })
        
        const savedUser= await newUser.save()
        console.log(savedUser);

        await sendEmail({email,emailtype: "VERIFY", userId: savedUser._id})

        return NextResponse.json({message: "User created successfully",success: true})

        
    }
    catch (e) {
        return NextResponse.json
    }
}