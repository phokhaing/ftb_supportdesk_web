"use client";

import { Suspense } from "react";
// fetch data in client side we must useSWR
import useSWR from "swr";

const fetcher = fetch("https://jsonplaceholder.typicode.com/users").then(
   (res) => res.json()
);

const page = () => {
   const users = useSWR("api/listuser", fetcher);
   console.log("listUsers", users);
   return (
      <div>
         <h2>Client fetching</h2>

         <Suspense fallback={<>Loading...</>}>
            {users?.data.map((user) => (
               <ul key={user.id}>
                  <li>{user.email}</li>
               </ul>
            ))}
         </Suspense>
      </div>
   );
};

export default page;
