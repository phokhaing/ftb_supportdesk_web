import jwt_decode from "jwt-decode";
import api from "./axiosAPIService";

const baseUrl = process.env.FTB_SUPPORTDESK_API;

export const auth = {
   authSignIn: async (credentials) => {
      const response = await fetch(`${baseUrl}auth/token/`, {
         method: "post",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(credentials),
      });

      if (response.ok) {
         const data = await response.json();
         return data;
      }
   },

   authSignOut: async () => {
      // remove cookies
      const signout = await fetch("/api/signout");
      // navigate to login page
      console.log("authSignOut:", signout);
      return true;
   },

   tokenVerify: async (authTokens) => {
      try {
         if (authTokens) {
            const verified = await fetch(`${baseUrl}auth/token/verify/`, {
               method: "post",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ token: authTokens?.access }),
            });
            const verifyToken = await verified.json();

            if (verifyToken?.code === "token_not_valid") {
               return false;
            }

            if (verifyToken) {
               const userinfo = jwt_decode(authTokens?.access);
               return userinfo;
            }

            return false;
         } else {
            return false;
         }
      } catch (error) {
         return false;
      }
   },

   // refreshToken: async (authTokens) => {
   //   let response = await fetch(`${baseUrl}auth/token/refresh/`, {
   //     method: "POST",
   //     headers: {
   //       "Content-Type": "application/json",
   //     },
   //     body: JSON.stringify({ refresh: authTokens.refresh }),
   //   });

   //   let data = await response.json();
   //   return data;
   // },

   refreshToken: async (authTokens) => {
      // refresh token if expired
      const res = await fetch(`${baseUrl}auth/token/refresh/`, {
         method: "post",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ refresh: authTokens?.refresh }),
      });

      const refreshToken = await res.json();
      if (refreshToken) {
         return refreshToken;
      }
      return false;
   },
};

export default auth;
