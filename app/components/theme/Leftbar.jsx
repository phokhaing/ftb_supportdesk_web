"use client";
import Link from "next/link";
import Menu from "./Menu";

const Leftbar = () => {
   return (
      <div className="left-side-menu">
         <div className="h-100" data-simplebar>
            {/* user profile */}
            <div className="user-box text-center">
               <img
                  src="/static/assets/images/users/phokhaing.jpg"
                  alt="user-img"
                  title="Mat Helme"
                  className="rounded-circle avatar-lg"
               />
               <div className="dropdown">
                  <Link
                     href="/"
                     className="text-black dropdown-toggle h5 mt-2 mb-1 d-block"
                     data-bs-toggle="dropdown"
                  >
                     Pho Khaing
                  </Link>
                  <div className="dropdown-menu user-pro-dropdown">
                     {/* item*/}

                     <Link
                        href="/"
                        passHref
                        legacyBehavior
                        className="dropdown-item notify-item"
                     >
                        <a>
                           <i className="fe-user me-1" />
                           <span>My Account</span>
                        </a>
                     </Link>
                     <Link
                        href="/"
                        replace
                        legacyBehavior
                        className="dropdown-item notify-item"
                     >
                        <a>
                           <i className="fe-settings me-1" />
                           <span>Settings</span>
                        </a>
                     </Link>

                     <Link
                        href="/"
                        replace
                        legacyBehavior
                        className="dropdown-item notify-item"
                     >
                        <a>
                           <i className="fe-lock me-1" />
                           <span>Lock Screen</span>
                        </a>
                     </Link>
                     {/* 
                     <Link
                        href="/"
                        replace
                        legacyBehavior
                        className="dropdown-item notify-item"
                     >
                        <a>
                           <i className="fe-log-out me-1" />
                           <span>Logout</span>
                        </a>
               </Link> */}
                  </div>
               </div>
               <p className="text-muted">Sofware Develper</p>
            </div>
            {/* end user profile */}

            {/*- start menu */}
            <Menu />
            {/* End Sidebar */}
            <div className="clearfix" />
         </div>
         {/* Sidebar -left */}
      </div>
   );
};

export default Leftbar;
