import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const encodedToken = request.cookies.get("token")?.value || "";
        const decodedToken= jwt.verify(encodedToken, process.env.JWT_SECRET_KEY!);
        // console.log(decodedToken);
        return decodedToken;
    } catch (error: any) {
        throw new Error(error.message)
    }
}