import { cookies } from "next/headers";
import {NextRequest, NextResponse} from "next/server";

const protectedRoutes = ["/profile"];

export default async function middleware(req: NextRequest) {
	// In production, the authorization logic should reside here.

	// const accessToken = cookies().get("access-token")?.value;
	// const pathname = req.nextUrl.pathname;
	
	// if (protectedRoutes.some((r) => pathname.startsWith(r))) {
	// 	return NextResponse.redirect(new URL("/login", req.nextUrl));
	// }

	return NextResponse.next();
}