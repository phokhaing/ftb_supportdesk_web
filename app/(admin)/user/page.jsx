// "use client";

import Head from "next/head";
import PageTitle from "../../components/theme/pageTitle";
import ListUser from "./components/ListUser";

// export const revalidate = 2;
export default function Page() {
   //  const { authTokens } = useContext(AuthContext);

   return (
      <div className="container-fluid">
         <PageTitle module="User Management" slug="List User" />
         <div className="row">
            <div className="col-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row mb-2">
                        <div className="col-sm-6">
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
                              <label htmlFor="status-select" className="me-2">
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
                        <div className="col-sm-6">
                           <div className="text-sm-end">
                              <button
                                 type="button"
                                 className="btn btn-success mb-2 me-1"
                              >
                                 <i className="mdi mdi-cog" />
                              </button>
                              <button
                                 type="button"
                                 className="btn btn-danger mb-2 mx-1"
                              >
                                 <i className="mdi mdi-plus-circle" /> Add New
                              </button>
                           </div>
                        </div>
                        {/* end col*/}
                     </div>
                     <div className="table-responsive">
                        <table
                           className="table table-centered table-striped dt-responsive nowrap w-100"
                           id="products-datatable"
                        >
                           <ListUser />
                        </table>
                     </div>
                  </div>{" "}
                  {/* end card-body*/}
               </div>
               {/* end card*/}
            </div>
         </div>
      </div>
   );
}
