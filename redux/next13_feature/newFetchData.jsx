import { use } from "react";

// Next 13 updated feature

const listCustomers = async () => {
  
  // Default method of cache
  // new getStaticProps
  let responseForceCache = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "force-cache",
    }
  );

  // Dont cache
  // new getServerProps
  let responseNoStore = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  // Every 5 seconds cache will die
  // new getStaticProps with revalidation options
  let responseRevalidate = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 5 },
  });

  return posts.json();
};

const newFetchData = async () => {
  // let { customers } = use(listCustomers()); or

  const posts = await listCustomers(); // call new getServerSideProps

  console.log(customers);

  return <div>Enter</div>;
};

export default newFetchData;
