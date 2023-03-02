// getStaticProps of Next 13

import Link from "next/link";

const fetchData = async () => {
   const res = fetch("https://jsonplaceholder.typicode.com/users");
   const data = res.json();
   return data;
};

// getStaticPaths of Next 13
export default function Staticprops() {
   const users = use(fetchData());

   return (
      <>
         <h2>getStaticProps of Next 13</h2>

         {users?.data.map((user) => (
            <ul key={user.id}>
               <Link
                  href={`/staticprops/${user.name}`
                     .replace(/\s+/g, "")
                     .toLowerCase()}
               >
                  <li>{user.email}</li>
               </Link>
            </ul>
         ))}
      </>
   );
}
