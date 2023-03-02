// "use client";

// import Link from "next/link";
// import useSWR from "swr";

// const fetcher = (path) =>
//   fetch(`https://jsonplaceholder.typicode.com/users${path}`).then((res) =>
//     res.json()
//   );

// const Client = () => {
//   const users = useSWR("api/users", fetcher);
//   return (
//     <div>
//       <h2>Client fetching </h2>
//       {users?.map((user) => {
//         return (
//           <ul key={user.id}>
//             <Link href={`/staticProps/${user.id}`}>
//               <li>{user.name}</li>
//             </Link>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

// export default Client;
