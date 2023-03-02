// getServersideProps in Next 13

import use from "react";

const fetchData = async () => {
   const res = fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
   });
   const data = res.json();
   return data;
};

// OR

const page = () => {
   const users = use(fetchData());

   return (
      <div>
         {users?.data.map((user) => (
            <ul key={user.id}>
               <li>{user.email}</li>
            </ul>
         ))}
      </div>
   );
};

export default page;
