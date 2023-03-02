// "use client";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import auth from "../services/AuthService";

const CheckAuthenication = async ({ authTokens }) => {
   const router = useRouter();
   // validate token key
   // is verified false, refreh token
   const isVerified = await auth.tokenVerify(authTokens);
   if (!isVerified) {
      const newAuthTokens = await auth.refreshToken(authTokens);
      if (newAuthTokens) {
         console.log("Logged in...");

         // clear cookie token key
         const signout = fetch("http://localhost:3000/api/signout", {
            method: "post",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ authTokens: JSON.stringify(authTokens) }),
         });

         // set new cookie token key
         const siggedin = fetch("http://localhost:3000/api/signin", {
            method: "post",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ authTokens: JSON.stringify(newAuthTokens) }),
         });
      } else {
         router.push("/signin");
      }
   }

   return (
      <div>
         <p>SiggedIn !!!</p>
      </div>
   );
};

export default CheckAuthenication;
