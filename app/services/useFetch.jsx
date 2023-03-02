import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

import { cookies } from "next/headers";

let useFetch = () => {
   let config = {};
   let baseUrl = process.env.FTB_SUPPORTDESK_API;

   let originalRequest = async (url, config) => {
      let response = await fetch(`${baseUrl}${url}`, config);
      let data = await response.json();
      return { response, data };
   };

   // refresh new token if token invalid or expired
   let refreshToken = async (authTokens) => {
      let response = await fetch(`${baseUrl}auth/token/refresh/`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ refresh: authTokens?.refresh }),
      });

      let newAuthTokens = await response.json();
      // localStorage.setItem("authTokens", JSON.stringify(newAuthTokens));
      // setAuthTokens(newAuthTokens);
      // setUser(jwt_decode(newAuthTokens.access));
      return newAuthTokens;
   };

   let callFetch = async (url) => {
      let cookieStore = cookies();
      let authTokens = JSON.parse(cookieStore.get("authTokens").value);

      // console.log("authTokens:", authTokens);
      // console.log("access:", `Bearer ${authTokens.access}`);
      // if (auth) {
      //    let user = jwt_decode(auth?.access);
      //    let isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      //    if (isExpired) {
      //       auth = await refreshToken(auth);
      //    }

      config["headers"] = {
         Authorization: `Bearer ${authTokens.access}`,
      };
      // }

      let { response, data } = await originalRequest(url, config);
      return { response, data };
   };

   return callFetch;
};

export default useFetch;
