"use client";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const getAuthTokens = () => {
  let { authTokens, setAuthTokens, setUser } = useContext(AuthContext);
  return { authTokens, setAuthTokens, setUser };
};

// export default getAuthTokens;
