"use client";
import { createContext, useState } from "react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { auth } from "../services/AuthService";

import { Notification } from "../../utils/AlertNotification";
// import nookies, { parseCookies } from "nookies";
// import Cookies from "js-cookie";
// import { setCookie } from "cookies-next";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
   const router = useRouter();

   // console.log("router:", router);

   // const cookieStore = Cookies.get("cookieToken");

   // const cookieTokens = cookieStore
   //    ? JSON.parse(cookieStore?.cookieToken)
   //    : null;
   // const cookieUser =
   //    cookieTokens != null ? jwt_decode(cookieTokens?.access) : null;

   const [authTokens, setAuthTokens] = useState(null);
   const [user, setUser] = useState(null);
   let [loading, setLoading] = useState(true);

   let loginUser = async (credentials) => {
      let response = await auth.authSignIn(credentials);

      // httpOnly: true,
      // we use this cos we don't want someone else to mess with our cookie
      // on the client side, we don't want someone else access our cookies using javascript

      console.log("AuthContext: ", response);

      if (response) {
         setAuthTokens(response);
         setUser(jwt_decode(response.access));

         // set authTokens in cookies
         // nookies.set("cookieToken", "cookieToken", JSON.stringify(response));

         // js-cookie
         // Cookies.set("cookieToken", JSON.stringify(response));

         // cookies-next
         // setCookie("authTokens", JSON.stringify(response));

         // set cookies
         fetch("/api/signin", {
            method: "post",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ authTokens: JSON.stringify(response) }),
         });

         Notification.success("Signed in successful!");
         router.push("/user");

         // router.push("/user", undefined, { shallow: true });
         // router.push(
         //    {
         //       pathname: "/products",
         //    },
         //    undefined,
         //    { shallow: true }
         // );
      } else {
         Notification.error("Credentials provided are not valid!");
      }
   };

   let logoutUser = () => {
      setAuthTokens(null);
      setUser(null);

      // remove  authTokens from cookies
      // nookies.destroy("authTokens");
      router.push("/signin");
   };

   let contextData = {
      user: user,
      authTokens: authTokens,
      setAuthTokens: setAuthTokens,
      setUser: setUser,
      loginUser: loginUser,
      logoutUser: logoutUser,
   };

   // useEffect(() => {
   //    if (authTokens) {
   //       setUser(jwt_decode(authTokens.access));
   //    }
   //    setLoading(false);
   // }, [authTokens, loading]);

   return (
      <AuthContext.Provider value={contextData}>
         {children}
         {/* {loading ? null : children} */}
      </AuthContext.Provider>
   );
};

// const AuthContextProvider = ({ children }) => {
//   let token =
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem("authTokens"))
//       : null;

//   const userInfo = jwt_decode(token?.access);
//   console.log(userInfo);
//   const [authenticated, setAuthenticated] = useState(userInfo);

//   return (
//     <AuthContext.Provider
//       value={{
//         authenticated,
//         // setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
//         setAuthenticated,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthContextProvider };
