// import { use } from "react";

// // getStaticProps in Next13
// const listUsers = async () => {
//   const users = await fetch("https://jsonplaceholder.typicode.com/users");
//   return users.json();
// };

// const StaticProps = () => {
//   const users = use(listUsers());
//   return (
//     // getStaticProps is page generated at build time
//     <div>
//       <h2>getStaticProps</h2>
//       {users?.map((user) => (
//         <ul key={user.id}>
//           <li>{user.name}</li>
//         </ul>
//       ))}
//     </div>
//   );
// };

// export default StaticProps;
