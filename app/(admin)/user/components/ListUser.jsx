// "use client";
// Import cookies
// import user from "../../../pages/api/user";
// import useFetch from "../../services/useFetch";
// import { getCookie } from "cookies-next";

// import { cookies } from "next/headers";

// import { useEffect, useState } from "react";

// import fetchInstance from "../../services/fetchInstance";
// import userApi from "../../services/UserService";

// import { headers, cookies } from "next/headers";

// import useFetch from "../../services/useFetch";

import userApi from "../../../services/UserService";
import Link from "next/link";
import { Suspense } from "react";

// server
// const getUser = async () => {

//    console.log("NextRequest:", NextRequest.cookies);

//    const baseURL = process.env.FTB_SUPPORTDESK_API;
//    const res = await fetch(`${baseURL}user/`, {
//       method: "GET",
//       headers: {
//          Authorization: cookies.authTokens,
//          "Content-Type": "application/json",
//       },
//    });

//    const data = await res.json();
//    return data;
// };

const ListUser = async () => {
   const users = await userApi.fetchAll();
   // console.log("ListUsers:", users);

   //    const cookieStore = cookies();
   //    const cookie = cookieStore.getAll();
   //    console.log("Cookies:", cookie);

   // const auth = getCookie("auth");
   // console.log("get auth cookie:", auth);

   // let data = await fetchInstance("user/");

   // let api = useFetch();
   // const { response, data } = await api("/user");

   // const data = await userApi.fetchAll();
   // console.log("response:", response);
   // console.log("data:", data);

   // const users = await getUser();
   // console.log("ListUser:", users);

   // console.log("cookies:", getCookie("authTokens"));

   // const [users, setUsers] = useState([]);

   // useEffect(() => {
   //    const getUser = async () => {
   //       const baseURL = process.env.FTB_SUPPORTDESK_API;
   //       const res = await fetch(`${baseURL}user/`, {
   //          method: "GET",
   //          headers: {
   //             Authorization: token.tokenkey,
   //             "Content-Type": "application/json",
   //          },
   //       });
   //       const data = await res.json();
   //       setUsers(data);
   //       console.log(data);
   //       console.log(data.results);
   //    };
   // }, []);

   return (
      <>
         {/* start table */}
         <Suspense
            fallback={
               <>
                  <div class="spinner-grow text-muted"></div>
                  <div class="spinner-grow text-primary"></div>
                  <div class="spinner-grow text-success"></div>
                  <div class="spinner-grow text-info"></div>
                  <div class="spinner-grow text-warning"></div>
                  <div class="spinner-grow text-danger"></div>
                  <div class="spinner-grow text-secondary"></div>
                  <div class="spinner-grow text-dark"></div>
                  <div class="spinner-grow text-light"></div>
               </>
            }
         >
            <div className="table-responsive">
               <table
                  className="table table-centered table-striped dt-responsive nowrap w-100"
                  id="products-datatable"
               >
                  <thead>
                     <tr>
                        <th style={{ width: 20 }}>
                           <div className="form-check">
                              <input
                                 type="checkbox"
                                 className="form-check-input"
                                 id="customCheck1"
                              />
                              <label
                                 className="form-check-label"
                                 htmlFor="customCheck1"
                              >
                                 &nbsp;
                              </label>
                           </div>
                        </th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>IP Address</th>
                        <th>Status</th>
                        <th style={{ width: 75 }}>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users?.data?.results?.map((user) => (
                        <tr key={user.pk}>
                           <td>
                              <div className="form-check">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="customCheck3"
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="customCheck3"
                                 >
                                    &nbsp;
                                 </label>
                              </div>
                           </td>
                           <td className="table-user">
                              <img
                                 src="/static/assets/images/users/user-3.jpg"
                                 alt="table-user"
                                 className="me-2 rounded-circle"
                              />
                              <a href="" className="text-body fw-normal">
                                 {user.last_name} {user.first_name}
                              </a>
                           </td>
                           <td>{user.gender == "M" ? "Male" : "Female"}</td>
                           <td>{user.email}</td>
                           <td>{user.phone_number}</td>
                           <td>{user.ip_address}</td>
                           <td>
                              <span
                                 className={`badge badge-soft-${
                                    user.is_active ? `success` : `danger`
                                 }`}
                              >
                                 {user.is_active ? "Active" : "Inactive"}
                              </span>
                           </td>
                           <td>
                              <Link href="" className="action-icon">
                                 {" "}
                                 <i className="mdi mdi-square-edit-outline" />
                              </Link>
                              <Link href="" className="action-icon">
                                 {" "}
                                 <i className="mdi mdi-delete" />
                              </Link>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </Suspense>
         {/* end table */}
      </>
   );
};

export default ListUser;
