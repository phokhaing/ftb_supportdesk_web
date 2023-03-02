// import { NextResponse } from "next/server";
// import jwt_decode from "jwt-decode";
// // import auth from "app/services/AuthService";

// export async function middleware(req) {
//    const { pathname } = req.nextUrl;

//    const cookieStore = req.cookies.get("authTokens");
//    const authTokens = cookieStore ? JSON.parse(cookieStore.value) : null;

//    const baseUrl = process.env.FTB_SUPPORTDESK_API;
//    let isAuthenticated;

//    // console.log("authTokens", authTokens);
//    // console.log("authTokens", authTokens.access);

//    // try {
//    // const verified = await fetch("http://localhost:3000/auth/token/verify/", {
//    //    method: "post",
//    //    headers: {
//    //       "Content-Type": "application/json",
//    //    },
//    //    body: JSON.stringify({ token: authTokens.access }),
//    // });

//    // if (verified) isAuthenticated = true;

//    /*
//       } catch (err) {
//          // refresh token if expired
//          let status = err.response.status;
//          if (status == 401) {
//             try {
//                const refreshToken = await fetch(
//                   `${baseURL}auth/token/refresh/`,
//                   {
//                      method: "post",
//                      headers: {
//                         "Content-Type": "application/json",
//                      },
//                      body: JSON.stringify({
//                         refresh: authTokens.refresh,
//                      }),
//                   }
//                );

//                console.log("refreshToken....", refreshToken);

//                if (refreshToken.status == 200) {
//                   res.setHeader(
//                      "Set-Cookie",
//                      cookie.serialize("authTokens", refreshToken.data.access, {
//                         httpOnly: true,
//                         // secure: process
//                         path: "/",
//                      })
//                   );

//                   authTokens = refreshToken.data;

//                   isAuthenticated = true;
//                }
//             } catch (err) {
//                isAuthenticated = false;
//             }
//          }
//       }
//       */
//    // };
//    // verify if token invalid or expired
//    // await verifyToken(authTokens);
//    // if (!isAuthenticated) {
//    //    // return NextResponse.redirect(new URL("/signin", req.url));
//    //    // return NextResponse.rewrite(new URL("/signin", req.url));
//    // }

//    // console.log("isAuthenticated:", isAuthenticated);

//    // const requestHeaders = new Headers(req.headers);
//    // requestHeaders.set("Authorization", authTokens?.access);

//    // // set request headers in NextResponse.rewrite
//    // const response = NextResponse.next({
//    //    request: {
//    //       headers: requestHeaders, // New request headers
//    //    },
//    // });

//    // // ​Set a new response header
//    // response.headers.set("Authorization", authTokens?.access);
//    // response.cookies.set("authTokens", JSON.stringify(authTokens));
//    return response;
// }

// // secured route middleware
// export const config = {
//    matcher: ["/user", "/role"],
// };
