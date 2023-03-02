// "use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Notification } from "../../../utils/AlertNotification";
import { auth } from "../../services/AuthService";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

var labelStyle = {
   color: "#FFFFFF",
};

var btnLoginStyle = {
   color: "#FFFFFF",
   backgroundColor: "#c4a006",
};

const theme = {
   backgroundColor: "#0C4DA2",
   textColor: "#c4a006",
   ftbLogo: "/static/assets/images/logo/ftb-logo-en-gold.png",
   // ftbLogo: "/static/assets/images/logo/ftb-logo.png",
   // backgroundImage: "url(/static/assets/images/ftb_background_login.jpg)",
};

const SignIn = () => {
   const { loginUser } = useContext(AuthContext);
   const router = useRouter();

   const initialState = {
      username: "",
      password: "",
   };

   const [formLogin, setFormLogin] = useState(initialState);
   const { username, password } = initialState;
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const validateForm = Yup.object().shape({
      username: Yup.string()
         .required("can't be blank!")
         .matches(/^[A-Za-z\s]*$/, "wrong format, letters only!")
         .min(2, "username length must be 5!"),
      password: Yup.string().required("password can't be blank!"),
   });

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(validateForm),
   });

   const handleLogin = async (credentials) => {
      setLoading(true);
      const res = await loginUser(credentials);
   };

   return (
      <>
         <div className="account-pages mt-5 mb-5">
            {/* <ToastContainer /> */}
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-4">
                     <div
                        className="card"
                        style={{ backgroundColor: `${theme?.backgroundColor}` }}
                     >
                        <div className="card-body p-4">
                           <div className="text-center w-75 m-auto">
                              <div className="auth-logo">
                                 <a
                                    href="index.html"
                                    className="logo logo-dark text-center"
                                 >
                                    <span className="logo-lg">
                                       <img src={theme?.ftbLogo} height={60} />
                                    </span>
                                 </a>
                                 <a
                                    href="index.html"
                                    className="logo logo-light text-center"
                                 >
                                    <span className="logo-lg">
                                       <img src={theme?.ftbLogo} height={60} />
                                    </span>
                                 </a>
                              </div>
                              <p className="text-muted mb-4 mt-3"></p>
                           </div>
                           <form onSubmit={handleSubmit(handleLogin)}>
                              <div className="mb-3">
                                 <label
                                    htmlFor="username"
                                    className="form-label"
                                    style={labelStyle}
                                 >
                                    Username
                                 </label>

                                 <div className="input-group input-group-merge">
                                    <input
                                       className={`form-control ${
                                          errors.username ? "is-invalid" : ""
                                       }`}
                                       type="text"
                                       {...register("username")}
                                       id="username"
                                       required
                                       placeholder="Enter your username"
                                    />
                                    <div className="input-group-text">
                                       <i
                                          className="fas fa-user-alt"
                                          aria-hidden="true"
                                       ></i>
                                    </div>
                                 </div>
                                 {errors.username && (
                                    <ul
                                       className="parsley-errors-list filled"
                                       id="parsley-id-73"
                                    >
                                       <li className="parsley-minlength">
                                          {errors.username}
                                       </li>
                                    </ul>
                                 )}
                              </div>
                              <div className="mb-3">
                                 <label
                                    htmlFor="password"
                                    className="form-label"
                                    style={labelStyle}
                                 >
                                    Password
                                 </label>
                                 <div className="input-group input-group-merge">
                                    <input
                                       type="password"
                                       className={`form-control ${
                                          errors.password ? "is-invalid" : ""
                                       }`}
                                       {...register("password")}
                                       id="password"
                                       required
                                       placeholder="Enter your password"
                                    />
                                    <div
                                       className="input-group-text"
                                       data-password="false"
                                    >
                                       <span className="password-eye" />
                                    </div>
                                 </div>
                                 {errors.password && (
                                    <ul
                                       className="parsley-errors-list filled"
                                       id="parsley-id-73"
                                    >
                                       <li className="parsley-minlength">
                                          {errors.password}
                                       </li>
                                    </ul>
                                 )}
                              </div>
                              <div className="mb-3">
                                 <div className="form-check">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="checkbox-signin"
                                       defaultChecked
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="checkbox-signin"
                                       style={labelStyle}
                                    >
                                       Remember me
                                    </label>
                                 </div>
                              </div>
                              <div className="text-center d-grid">
                                 {loading ? (
                                    <button
                                       className="btn btn-default"
                                       type="submit"
                                       style={btnLoginStyle}
                                    >
                                       <span
                                          className="spinner-border spinner-border-sm me-1"
                                          role="status"
                                          aria-hidden="true"
                                       ></span>
                                       Logging in...
                                    </button>
                                 ) : (
                                    <button
                                       type="submit"
                                       className="btn btn-default"
                                       style={btnLoginStyle}
                                    >
                                       Login
                                    </button>
                                 )}
                              </div>
                           </form>

                           <div className="text-center">
                              <h6 className="mt-3 text-muted">
                                 <p>
                                    {" "}
                                    <a
                                       href="auth-recoverpw.html"
                                       className="text-white-50 ms-1"
                                    >
                                       Forgot your password?
                                    </a>
                                 </p>
                              </h6>
                           </div>
                        </div>{" "}
                        {/* end card-body */}
                     </div>
                     {/* end card */}
                     {/* end row */}
                  </div>
                  {/* end col */}
               </div>
               {/* end row */}
            </div>
            {/* end container */}
         </div>
      </>
   );
};

export default SignIn;
