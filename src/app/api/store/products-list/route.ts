import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const product = await fetch('https://fakestoreapi.com/products')/* .then(res=>res.json()) */

    console.log('product bask', product);
    
    return NextResponse.json({test:[]}, {
        status: 200,
        statusText: "success",
      });

}