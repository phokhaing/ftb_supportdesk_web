// import { auth } from "./app/services/AuthService";
// import { NextRequest, NextResponse } from "next/server";

// // import { headers } from "next/headers";

// const securedRoute = ["", "/signin", "/user", "/role"];

// let authTokens =
//    typeof window !== "undefined"
//       ? window.localStorage.getItem("access")
//       : false;

// export default async function middleware(req, res) {
//    console.log("Middleware loading...");
//    const { pathname } = req.nextUrl;

//    authTokens =
//       typeof window !== "undefined"
//          ? window.localStorage.getItem("access")
//          : false;

//    console.log("authTokens:", authTokens);

//    if (securedRoute.some((prefix) => pathname.startsWith(prefix))) {
//       const isAuthenticated = await auth.tokenVerify();

//       console.log("isAuthenticated:", isAuthenticated);

//       if (isAuthenticated) {
//          console.log(isAuthenticated);
//          // req.headers.append("Authorization", "Bearer " + authTokens?.access);

//          return NextResponse.rewrite(new URL("/", req.url));
//       } else {
//          return NextResponse.rewrite(new URL("/signin", req.url));
//       }
//    }
//    return NextResponse.next();
// }

// // // // This function can be marked `async` if using `await` inside
// // // export function middleware(request: NextRequest) {
// // //   return NextResponse.redirect(new URL("/about-2", request.url));

// // //   if (request.nextUrl.pathname.startsWith('/')) {
// // //     return NextResponse.rewrite(new URL('/about-2', request.url))
// // //   }

// // //   if (request.nextUrl.pathname.startsWith('/dashboard')) {
// // //     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
// // //   }

// // // }

// // // // See "Matching Paths" below to learn more
// // // export const config = {
// // //   matcher: ["/signin", "/user:path*", "/role:path*"],
// // // };
