export default async (req, res) => {
   console.log("req headers:", req.headers);

   const baseURL = process.env.FTB_SUPPORTDESK_API;
   const authTokens = req.headers.authorization;

   const data = await fetch(`${baseURL}user/`, {
      method: "get",
      headers: {
         Authorization: `Bearer ${authTokens}`,
         "Content-Type": "application/json",
      },
   });

   const users = await data.json();

   res.status(200).json(users);
};
