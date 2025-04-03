import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc0MzY2OTYyNH0.t4YU0HPez40JA_-UNsFfk1_4thN2tAsp7EQFFBb0-b8"
    //const token = await request.headers.get("Authorization")?.split(" ")[1]

    if (!token) {
        return NextResponse.json({ message: "トークンがありません" })
    }

    try {
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = await jwtVerify(token, secretKey)

        return NextResponse.next()
    } catch (error) {
        return NextResponse.json({ message: "トークンが正しくないので、ログインしてください" })
    }

}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"]
}