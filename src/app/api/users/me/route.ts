//This route is to extract info about the user from the token's tokenData to show it on the that user's profile page, so we use a helper method(present in helpers/getDataFromToken()) which decodes to which we sent a request and it sends back the decodedToken object which contains the username, email, id of the user, we extract the id from this object and query the database for the user thru this id to get the info of the user that we require.

import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/model/user";
import { connect } from "@/Config/dbConfig";

//connect with db
connect();

export async function GET(request: NextRequest){
    try {
        const decodedToken: any = getDataFromToken(request);
        // console.log(decodedToken);
        const userId = decodedToken.id;

        const user = await User.findById({_id: userId}).select("-password");
        console.log(user);
        return NextResponse.json({user})
    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}