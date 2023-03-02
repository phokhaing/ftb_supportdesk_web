// const listUsers = async () => {
//   const users = await fetch("https://jsonplaceholder.typicode.com/users");
//   return users.json();
// };

// // getStaticPaths in Next13
// // generated all users static paged at build time ready
// const generatedStaticPaths = async () => {
//   const users = await listUsers();
//   return users?.map((user) => ({
//     id: user?.id,
//   }));
// };

// export default StaticPage = ({ params }) => {
//   return (
//     <>
//       <h1>Static Page generated at build time ready.</h1>
//       <h1>User: {params.id}</h1>
//     </>
//   );
// };
