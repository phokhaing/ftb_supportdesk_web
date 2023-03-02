// Next 13 updated feature

// 1. new getStaticSideProps
const findPost = async (id) => {
  let post = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`);
  return post.json();
};

const newFetchData = async ({ params, searchParams }) => {
  const { id } = params;
  const post = await findPost(id); // call new getStaticSideProps

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
};

export default newFetchData;
