import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

// import { cookies } from "next/headers";

export default (req, res) => {
   // Max-Age=0, which will make the browser delete that cookie immediately
   res.setHeader(
      "Set-Cookie",
      cookie.serialize("authTokens", req.body.authTokens, {
         maxAge: 0,
         path: "/",
      })
   );

   res.status(200);
   res.json({ success: true });
};
