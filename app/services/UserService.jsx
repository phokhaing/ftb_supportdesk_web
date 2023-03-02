import axios from "axios";
import useFetch from "./useFetch";
// import { cookies, headers } from "next/headers";

const api = useFetch();
const userApi = {
   fetchAll: async () => {
      try {
         const response = await api("user/", {
            cache: "no-store",
         });
         return response;
      } catch (error) {
         return error;
      }
   },

   fetchOne: async ({ id }) => {
      const res = await useFetch(`/users/${id}`);
      return res.json();
   },

   create: async (data) => {
      const res = useFetch("/users/", data);
      return res.json();
   },

   update: async ({ id, data }) => {
      const res = await useFetch(`/users/${id}`, data);
      return res.json();
   },

   delete: async ({ id }) => {
      await useFetch.delete(`/users/${id}`);
      return { id };
   },
};

export default userApi;
