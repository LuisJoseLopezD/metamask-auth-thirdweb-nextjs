import { NextResponse } from "next/server";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req:any){
    
    let verify = req.cookies.get("next-auth.session-token");
    let url = req.url
    
    if(!verify && url.includes('/dashboard')){
        return NextResponse.redirect("http://localhost:3000/");
    }

    if (verify && url === "http://localhost:3000/") {
      return NextResponse.redirect("http://localhost:3000/dashboard");
    }

}