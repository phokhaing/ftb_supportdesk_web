
export const branch = {

   authSignIn: async (credentials) => {
      const response = await fetch(`${baseURL}auth/token/`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(credentials),
      });

      if (response.ok) {
         const data = await response.json();
         return data;
      }
   },

}