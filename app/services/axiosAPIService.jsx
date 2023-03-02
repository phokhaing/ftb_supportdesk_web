import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = process.env.FTB_SUPPORTDESK_API;

let authTokens =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null;

const apiService = axios.create({
  baseURL,
  headers: {
    Authorization: `${authTokens ? "Bearer" + authTokens.access : ""}`,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

if (authTokens !== null) {
  apiService.interceptors.request.use(async (config) => {
    if (authTokens) {
      config.headers.Authorization = `Bearer ${authTokens.access}`;
    }

    // const user = jwt_decode(authTokens.access);
    // const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    let isExpired;

    try {
      // verify current token key
      const verifyToken = await axios.post(`${baseURL}auth/token/verify/`, {
        token: authTokens.access,
      });
      if (verifyToken?.status == 200) {
        isExpired = false;
      }
    } catch (err) {
      isExpired = true;
    }

    console.log(isExpired);

    // if token expired, then refresh new token
    if (isExpired == true) {
      // refresh new token key
      const refreshToken = await axios.post(`${baseURL}auth/token/refresh/`, {
        refresh: authTokens.refresh,
      });
      console.log("refreshToken");
      console.log(refreshToken);

      // set new new token key to local storage
      typeof window !== "undefined"
        ? localStorage.setItem("authTokens", JSON.stringify(refreshToken.data))
        : "";

      // set new authTokens to header Authorization
      authTokens =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("authTokens"))
          : null;

      // set header Authorization with new token key
      config.headers.Authorization = `Bearer ${authTokens.access}`;
    }

    return config;
  });
}

export default apiService;
