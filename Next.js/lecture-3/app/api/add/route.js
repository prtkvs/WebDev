export async function GET(request) {
    return new Response("This is GET response from add api");
}
 
// export async function HEAD(request) {}
 
// export async function PUT(request) {}
 
// export async function DELETE(request) {}
 
// export async function PATCH(request) {}
 
// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
// export async function OPTIONS(request) {}

import { NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json();
    console.log(data);
    // return NextResponse.json({success:true, data:"yes"})
    return NextResponse.json({success:true, data})
}

// similarly like this we can do for PUT, DELETE, PATCH, GET, HEAD