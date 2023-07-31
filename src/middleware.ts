import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
    //get the path
    const path = request.nextUrl.pathname;

    //check if its a public path
    const isPublicPath = path === "/login" || path === "/signup";

    //the request would go and extract the token, if present and if not its empty
    const token = request.cookies.get("token")?.value || ""; 
    
    // if path is public and u have the token(i.e, logged in user, u should not be able to see the public paths)
    if(isPublicPath && token){
        // return NextResponse.redirect("/"); //o OR
        return NextResponse.redirect(new URL("/profile", request.nextUrl));
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
    // return request;
}

export const config = {
  matcher: [
    "/",
    "/profile/(:path*)",
    "/login",
    "/signup"
  ]
}