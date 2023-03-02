import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default (req, res) => {
   console.log("load api/signin...", req.body.authTokens);

   // then store cookies
   res.setHeader(
      "Set-Cookie",
      cookie.serialize("authTokens", req.body.authTokens, {
         httpOnly: true,
         path: "/",
      })
   );

   res.status(200);
   res.json({ authTokens: req.body.authTokens });

   console.log("Res:", res);
};
