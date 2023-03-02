"use client";

import Head from "next/head";
import { use, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

export default function Page() {
  // const authContext = useContext(AuthContext);
  // console.log(authContext);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row mb-2">
                <div className="col-sm-4">
                  <a href="" className="btn btn-danger mb-2">
                    <i className="mdi mdi-plus-circle me-2" /> Add
                  </a>
                </div>
                <div className="col-sm-8">
                  <div className="text-sm-end">
                    <button type="button" className="btn btn-success mb-2 me-1">
                      <i className="mdi mdi-cog" />
                    </button>
                    <button type="button" className="btn btn-light mb-2 me-1">
                      Import
                    </button>
                    <button type="button" className="btn btn-light mb-2">
                      Export
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
                      <th>Customer</th>
                      <th>Phone</th>
                      <th>Balance</th>
                      <th>Orders</th>
                      <th>Last Order</th>
                      <th>Status</th>
                      <th style={{ width: 75 }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck2"
                          >
                            ABC
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-4.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Paul J. Friend
                        </a>
                      </td>
                      <td>050 414 8778</td>
                      <td>$12,874.82</td>
                      <td>43</td>
                      <td>
                        August 05 2019{" "}
                        <small className="text-muted">10:29 PM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-success">Active</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Bryan J. Luellen
                        </a>
                      </td>
                      <td>215-302-3376</td>
                      <td>$874.25</td>
                      <td>220</td>
                      <td>
                        August 04 2019{" "}
                        <small className="text-muted">08:18 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-success">Active</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck4"
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
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Kathryn S. Collier
                        </a>
                      </td>
                      <td>828-216-2190</td>
                      <td>$125.78</td>
                      <td>841</td>
                      <td>
                        November 04 2019{" "}
                        <small className="text-muted">10:29 PM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-danger">Blocked</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck5"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-1.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Timothy Kauper
                        </a>
                      </td>
                      <td>(216) 75 612 706</td>
                      <td>$561.25</td>
                      <td>62</td>
                      <td>
                        February 01 2019{" "}
                        <small className="text-muted">07:22 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-danger">Blocked</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck6"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck6"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-5.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Zara Raws
                        </a>
                      </td>
                      <td>(02) 75 150 655</td>
                      <td>$2147.84</td>
                      <td>09</td>
                      <td>
                        February 01 2019{" "}
                        <small className="text-muted">07:22 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-success">Active</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck7"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-6.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Annette P. Kelsch
                        </a>
                      </td>
                      <td>(+15) 73 483 758</td>
                      <td>$451.28</td>
                      <td>25</td>
                      <td>
                        September 07 2019{" "}
                        <small className="text-muted">07:22 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-success">Active</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck8"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck8"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-7.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Jenny C. Gero
                        </a>
                      </td>
                      <td>078 7173 9261</td>
                      <td>$965.20</td>
                      <td>214</td>
                      <td>
                        November 14 2019{" "}
                        <small className="text-muted">07:22 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-danger">Blocked</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck9"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck9"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-8.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Edward Roseby
                        </a>
                      </td>
                      <td>078 6013 3854</td>
                      <td>$71584.2</td>
                      <td>365</td>
                      <td>
                        February 09 2019{" "}
                        <small className="text-muted">07:22 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-success">Active</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck10"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck10"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-9.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Anna Ciantar
                        </a>
                      </td>
                      <td>(216) 76 298 896</td>
                      <td>$5482.00</td>
                      <td>921</td>
                      <td>
                        September 12 2019{" "}
                        <small className="text-muted">07:22 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-success">Active</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck11"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck11"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-10.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Dean Smithies
                        </a>
                      </td>
                      <td>077 6157 4248</td>
                      <td>$482.15</td>
                      <td>68</td>
                      <td>
                        October 09 2019{" "}
                        <small className="text-muted">07:22 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-success">Active</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck12"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck12"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-1.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Labeeb Ghali
                        </a>
                      </td>
                      <td>050 414 8778</td>
                      <td>$7852.3</td>
                      <td>475</td>
                      <td>
                        October 27 2019{" "}
                        <small className="text-muted">07:22 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-success">Active</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck13"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck13"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td className="table-user">
                        <img
                          src="/static/assets/images/users/user-2.jpg"
                          alt="table-user"
                          className="me-2 rounded-circle"
                        />
                        <a
                          href=""
                          className="text-body fw-normal"
                        >
                          Rory Seekamp
                        </a>
                      </td>
                      <td>078 5054 8877</td>
                      <td>$3365.12</td>
                      <td>25</td>
                      <td>
                        April 21 2019{" "}
                        <small className="text-muted">07:22 AM</small>
                      </td>
                      <td>
                        <span className="badge badge-soft-danger">Blocked</span>
                      </td>
                      <td>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-square-edit-outline" />
                        </a>
                        <a href="" className="action-icon">
                          {" "}
                          <i className="mdi mdi-delete" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>
      </div>
    </>
  );
}
