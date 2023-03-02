// "use client";

import Link from "next/link";
// import PageTitle from "../components/theme/pageTitle";
// import { useContext, useEffect } from "react";
// import AuthContext from "../context/AuthContext";
// import { headers } from "next/headers";
// import { useContext } from "react";
// import ListUser from "../components/users/ListUser";
// import AuthContext from "../context/AuthContext";
// import useFetch from "../services/useFetch";
// import fetchInstance from "../services/fetchInstance";

const Page = () => {
   // const api = useFetch();
   // const { response, data } = await api("user");

   // const { authTokens } = useContext(AuthContext);
   //  console.log("authTokens:", response, data);

   return (
      <>
         {/* start top content */}
         <div className="container-fluid">
            {/* <div className="row">
               <PageTitle module="User" slug="List User" />
            </div> */}
            <div className="row">
               <div className="col-12">
                  <div className="card">
                     <div className="card-body">
                        <div className="row justify-content-between">
                           <div className="col-md-8">
                              <form className="d-flex flex-wrap align-items-center">
                                 <label
                                    htmlFor="inputPassword2"
                                    className="visually-hidden"
                                 >
                                    Search
                                 </label>
                                 <div className="me-3">
                                    <input
                                       type="search"
                                       className="form-control my-1 my-md-0"
                                       id="inputPassword2"
                                       placeholder="Search..."
                                    />
                                 </div>
                                 <label
                                    htmlFor="status-select"
                                    className="me-2"
                                 >
                                    Sort By
                                 </label>
                                 <div className="me-sm-3">
                                    <select
                                       className="form-select my-1 my-md-0"
                                       id="status-select"
                                    >
                                       <option>All</option>
                                       <option>Name</option>
                                       <option>Post</option>
                                       <option>Followers</option>
                                       <option>Followings</option>
                                    </select>
                                 </div>
                              </form>
                           </div>
                           <div className="col-md-4">
                              <div className="text-md-end mt-3 mt-md-0">
                                 <button
                                    type="button"
                                    className="btn btn-success waves-effect waves-light me-1"
                                 >
                                    <i className="mdi mdi-cog" />
                                 </button>
                                 <button
                                    type="button"
                                    className="btn btn-danger waves-effect waves-light"
                                    data-bs-toggle="modal"
                                    data-bs-target="#custom-modal"
                                 >
                                    <i className="mdi mdi-plus-circle me-1" />{" "}
                                    Add New
                                 </button>
                              </div>
                           </div>
                           {/* end col*/}
                        </div>{" "}
                        {/* end row */}
                     </div>
                  </div>{" "}
                  {/* end card */}
               </div>
               {/* end col*/}
               {/* <ListUser tokenkey={`Bearer ${authTokens?.access}`} /> */}
            </div>
         </div>
         {/* end top content */}
         {/* <ListUser /> */}

         {/* list users */}
      </>
   );
};

export default Page;
