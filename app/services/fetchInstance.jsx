// "use client";

import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";
// import nookies, { parseCookies } from "nookies";
// import Cookies from "js-cookie";

import { getCookies } from "cookies-next";
const baseURL = process.env.FTB_SUPPORTDESK_API;

// let cookie;
// let cookieTokens;

// cookie = parseCookies();
// console.log("cookie: " + JSON.stringify(cookieTokens));

const originalRequest = async (url, config) => {
   url = `${baseURL}${url}`;

   let response = await fetch(url, config);
   let data = await response.json();
   console.log("Requesting...", data);
   return { response, data };
};

const refreshToken = async (authTokens) => {
   let response = await fetch(`${baseURL}auth/token/refresh/`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
   });

   let data = await response.json();
   //  if (typeof window !== "undefined") {
   //     localStorage.setItem("authTokens", JSON.stringify(data));
   //  }
   return data;
};

const fetchInstance = async (url, config = {}) => {
   //  const cookieTokens = JSON.parse(cookie.authTokens);
   //  const cookieUser = cookieTokens ? jwt_decode(cookieTokens.access) : null;

   //  let cookieStore = nookies.get("cookieToken");
   // let cookieStore = Cookies.get("cookieToken");
   //  console.log("cookieStore :", cookieStore);
   //  let cook = Cookies.get();
   //  console.log("authTokens :", JSON.parse(cookieStore.authTokens));
   //  return cookieStore;

   let authCookie = getCookies();
   console.log("authCookie :", authCookie);
   console.log("type:", typeof authCookie);
   console.log("length: ", Object.keys(authCookie).length);
   //  console.log(cook);

   /*
   //  cookie = nookies.get("authTokens");
   cookie = parseCookies();

   console.log("cookie:", JSON.parse(cookie));
   // cookieTokens = JSON.parse(cookie?.authTokens);

   //  const cookies = parseCookies();
   //  const auth = JSON.parse(cookies.authTokens);

   // const user = jwt_decode(authTokens.access);
   // const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

   // if (isExpired) {
   //   authTokens = await refreshToken(authTokens);
   // }

   // Process with request
   config["headers"] = {
      Authorization: `Bearer ${cookieTokens?.access}`,
   };

   console.log("Before request");
   let { response, data } = await originalRequest(url, config);

   if (
      response.statusText === "Unauthorized" ||
      response.statusText === "Forbidden"
   ) {
      cookieTokens = await refreshToken(cookieTokens);

      config["headers"] = {
         Authorization: `Bearer ${cookieTokens?.access}`,
      };

      let newResponse = await originalRequest(url, config);
      response = newResponse.response;
      data = newResponse.data;
   }
   console.log("After request");
   return { response, data };
*/
};

export default fetchInstance;
