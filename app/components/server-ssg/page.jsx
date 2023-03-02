import axios from "axios";
import { use } from "react";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// getServerSideProps in Next13
const listUsers = async () => {
  try {
    const res = await api.get("/users", { cache: "no-cache" });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const getData = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache", // getServerSideProps must set no-cache
  });
  return users.json();
};

const Server = () => {
  const users = use(listUsers());
  return (
    <div>
      <h2>Server fetching (getServerSideProps)</h2>
      {users?.map((user) => {
        return (
          <ul key={user.id}>
            <li>{user.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Server;
