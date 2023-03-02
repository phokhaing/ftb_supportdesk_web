import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default (req, res) => {
   res.setHeader(
      "Set-Cookie",
      cookie.serialize("authTokens", req.body.authTokens, {
         httpOnly: true,
         // secure: process
         path: "/",
      })
   );

   res.status(200);
   res.json({ success: true });
};
