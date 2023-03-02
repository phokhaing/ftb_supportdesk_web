import auth from "./services/AuthService";

const isValidToken = async (authTokens) => {
   // const router = useRouter();

   console.log("authTokens:", authTokens);

   const isVerified = await auth.tokenVerify(authTokens);

   if (isVerified == false) {
      const refreshToken = await auth.refreshToken(authTokens);

      console.log("refreshToken", refreshToken);

      if (refreshToken) {
         // set new token key to cookie header
         const apiSignin = await fetch("/api/signin", {
            method: "post",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               // authTokens: JSON.stringify(refreshToken),
               tes: "abc",
            }),
         });

         console.log("apiSignin", apiSignin);

         console.log("loading api/signin");
      } else {
         // await auth.authSignOut();
         // router.push("/signin");
         console.log("");
      }
      let userinfo = jwt_decode(refreshToken.access);
      return userinfo;
   }

   return isVerified;
};

export default isValidToken;
