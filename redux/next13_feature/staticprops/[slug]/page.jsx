const fetchData = async () => {
   const res = fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
   });
   const data = res.json();
   return data;
};

// getStaticPaths of Next 13
export async function generateStaticParams() {
   const users = await fetchData();
   return users?.data.map((user) => ({
      slug: user?.name.replace(/\/$/, "-").toLowerCase(),
   }));
}

export default function Staticpage({ params }) {
   return <h1>Staic path or user are: {params.slug}</h1>;
}
