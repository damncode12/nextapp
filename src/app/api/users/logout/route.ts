import { NextResponse } from "next/server";

export async function GET(){
 try {
     const response = NextResponse.json({message: "Logout successful"})
     response.cookies.set("token", "", {maxAge: 0})
     return response
 } catch (e) {
     return NextResponse.json({message: "An error occurred"})
 }

}