"use client";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AuthContext from "../../context/AuthContext";
import a from "next/link";
import Link from "next/link";
import checkAutoSignout from "../../hook/checkAutoSignout";

const Topbar = () => {
   checkAutoSignout();

   const { theme } = useContext(ThemeContext);
   let { user, logoutUser } = useContext(AuthContext);

   return (
      <div
         className="navbar-custom"
         style={{ backgroundColor: `${theme?.backgroundColor}` }}
      >
         <div className="container-fluid">
            <ul className="list-unstyled topnav-menu float-end mb-0">
               {/* <li className="d-none d-lg-block">
            <form className="app-search">
              <div className="app-search-box dropdown">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    id="top-search"
                  />
                  <button className="btn input-group-text" type="submit">
                    <i className="fe-search" />
                  </button>
                </div>
                <div className="dropdown-menu dropdown-lg" id="search-dropdown">
                  <div className="dropdown-header noti-title">
                    <h5 className="text-overflow mb-2">Found 22 results</h5>
                  </div>
                  <a
                    href=""
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-home me-1" />
                    <span>Analytics Report</span>
                  </a>
                  <a
                    href=""
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-aperture me-1" />
                    <span>How can I help you?</span>
                  </a>
                  <a
                    href=""
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-settings me-1" />
                    <span>User profile settings</span>
                  </a>
                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                  </div>
                  <div className="notification-list">
                    <a
                      href=""
                      className="dropdown-item notify-item"
                    >
                      <div className="d-flex align-items-start">
                        <img
                          className="d-flex me-2 rounded-circle"
                          src="/static/assets/images/users/user-2.jpg"
                          alt="Generic placeholder image"
                          height={32}
                        />
                        <div className="w-100">
                          <h5 className="m-0 font-14">Erwin E. Brown</h5>
                          <span className="font-12 mb-0">UI Designer</span>
                        </div>
                      </div>
                    </a>
                    <a
                      href=""
                      className="dropdown-item notify-item"
                    >
                      <div className="d-flex align-items-start">
                        <img
                          className="d-flex me-2 rounded-circle"
                          src="/static/assets/images/users/phokhaing.jpg"
                          alt="Generic placeholder image"
                          height={32}
                        />
                        <div className="w-100">
                          <h5 className="m-0 font-14">Jacob Deo</h5>
                          <span className="font-12 mb-0">Developer</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </li> */}
               <li className="dropdown d-inline-block d-lg-none">
                  <Link
                     className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                     data-bs-toggle="dropdown"
                     href="#"
                     role="button"
                     aria-haspopup="false"
                     aria-expanded="false"
                  >
                     <i className="fe-search noti-icon" />
                  </Link>
                  <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                     <form className="p-3">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search ..."
                           aria-label="Recipient's username"
                        />
                     </form>
                  </div>
               </li>

               {/* start fullscreen */}
               <li className="dropdown d-none d-lg-inline-block">
                  <Link
                     className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                     data-toggle="fullscreen"
                     href="#"
                  >
                     <i className="fe-maximize noti-icon" />
                  </Link>
               </li>
               {/* end shortcut */}

               {/* start shortcut */}
               <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                  <Link
                     className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                     data-bs-toggle="dropdown"
                     href="#"
                     role="button"
                     aria-haspopup="false"
                     aria-expanded="false"
                  >
                     <i className="fe-grid noti-icon" />
                  </Link>
                  <div className="dropdown-menu dropdown-lg dropdown-menu-end">
                     <div className="p-lg-1">
                        <div className="row g-0">
                           <div className="col">
                              <Link className="dropdown-icon-item" href="#">
                                 <img
                                    src="/static/assets/images/brands/slack.png"
                                    alt="slack"
                                 />
                                 <span>Slack</span>
                              </Link>
                           </div>
                           <div className="col">
                              <Link className="dropdown-icon-item" href="#">
                                 <img
                                    src="/static/assets/images/brands/github.png"
                                    alt="Github"
                                 />
                                 <span>GitHub</span>
                              </Link>
                           </div>
                           <div className="col">
                              <Link className="dropdown-icon-item" href="#">
                                 <img
                                    src="/static/assets/images/brands/dribbble.png"
                                    alt="dribbble"
                                 />
                                 <span>Dribbble</span>
                              </Link>
                           </div>
                        </div>
                        <div className="row g-0">
                           <div className="col">
                              <Link className="dropdown-icon-item" href="#">
                                 <img
                                    src="/static/assets/images/brands/bitbucket.png"
                                    alt="bitbucket"
                                 />
                                 <span>Bitbucket</span>
                              </Link>
                           </div>
                           <div className="col">
                              <Link className="dropdown-icon-item" href="#">
                                 <img
                                    src="/static/assets/images/brands/dropbox.png"
                                    alt="dropbox"
                                 />
                                 <span>Dropbox</span>
                              </Link>
                           </div>
                           <div className="col">
                              <Link className="dropdown-icon-item" href="#">
                                 <img
                                    src="/static/assets/images/brands/g-suite.png"
                                    alt="G Suite"
                                 />
                                 <span>G Suite</span>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               {/* end shortcut */}

               {/* start flag */}
               <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                  <Link
                     className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                     data-bs-toggle="dropdown"
                     href="#"
                     role="button"
                     aria-haspopup="false"
                     aria-expanded="false"
                  >
                     <img
                        src="/static/assets/images/flags/cambodia.png"
                        alt="user-image"
                        height={16}
                     />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                     <Link href="" className="dropdown-item">
                        <img
                           src="/static/assets/images/flags/germany.jpg"
                           alt="user-image"
                           className="me-1"
                           height={12}
                        />{" "}
                        <span className="align-middle">German</span>
                     </Link>
                     <Link href="" className="dropdown-item">
                        <img
                           src="/static/assets/images/flags/italy.jpg"
                           alt="user-image"
                           className="me-1"
                           height={12}
                        />{" "}
                        <span className="align-middle">Italian</span>
                     </Link>
                     <Link href="" className="dropdown-item">
                        <img
                           src="/static/assets/images/flags/spain.jpg"
                           alt="user-image"
                           className="me-1"
                           height={12}
                        />{" "}
                        <span className="align-middle">Spanish</span>
                     </Link>
                     <Link href="" className="dropdown-item">
                        <img
                           src="/static/assets/images/flags/russia.jpg"
                           alt="user-image"
                           className="me-1"
                           height={12}
                        />{" "}
                        <span className="align-middle">Russian</span>
                     </Link>
                  </div>
               </li>
               {/* end flag */}

               {/* start notification */}
               <li className="dropdown notification-list topbar-dropdown">
                  <Link
                     className="nav-link dropdown-toggle waves-effect waves-light"
                     data-bs-toggle="dropdown"
                     href="#"
                     role="button"
                     aria-haspopup="false"
                     aria-expanded="false"
                  >
                     <i className="fe-bell noti-icon" />
                     <span className="badge bg-danger rounded-circle noti-icon-badge">
                        9
                     </span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end dropdown-lg">
                     <div className="dropdown-item noti-title">
                        <h5 className="m-0">
                           <span className="float-end">
                              <Link href="#" className="text-dark">
                                 <small>Clear All</small>
                              </Link>
                           </span>
                           Notification
                        </h5>
                     </div>
                     <div className="noti-scroll" data-simplebar>
                        <Link
                           href=""
                           className="dropdown-item notify-item active"
                        >
                           <div className="notify-icon">
                              <img
                                 src="/static/assets/images/users/user-1.jpg"
                                 className="img-fluid rounded-circle"
                                 alt="true"
                              />{" "}
                           </div>
                           <p className="notify-details">Cristina Pride</p>
                           <p className="text-muted mb-0 user-msg">
                              <small>
                                 Hi, How are you? What about our next meeting
                              </small>
                           </p>
                        </Link>
                        <Link href="" className="dropdown-item notify-item">
                           <div className="notify-icon bg-primary">
                              <i className="mdi mdi-comment-account-outline" />
                           </div>
                           <p className="notify-details">
                              Caleb Flakelar commented on Admin
                              <small className="text-muted">1 min ago</small>
                           </p>
                        </Link>
                        <Link href="" className="dropdown-item notify-item">
                           <div className="notify-icon">
                              <img
                                 src="/static/assets/images/users/user-4.jpg"
                                 className="img-fluid rounded-circle"
                                 alt="true"
                              />{" "}
                           </div>
                           <p className="notify-details">Karen Robinson</p>
                           <p className="text-muted mb-0 user-msg">
                              <small>
                                 Wow ! this admin looks good and awesome design
                              </small>
                           </p>
                        </Link>
                        <Link href="" className="dropdown-item notify-item">
                           <div className="notify-icon bg-warning">
                              <i className="mdi mdi-account-plus" />
                           </div>
                           <p className="notify-details">
                              New user registered.
                              <small className="text-muted">5 hours ago</small>
                           </p>
                        </Link>
                        <a href="" className="dropdown-item notify-item">
                           <div className="notify-icon bg-info">
                              <i className="mdi mdi-comment-account-outline" />
                           </div>
                           <p className="notify-details">
                              Caleb Flakelar commented on Admin
                              <small className="text-muted">4 days ago</small>
                           </p>
                        </a>
                        <a href="" className="dropdown-item notify-item">
                           <div className="notify-icon bg-secondary">
                              <i className="mdi mdi-heart" />
                           </div>
                           <p className="notify-details">
                              Carlos Crouch liked
                              <b>Admin</b>
                              <small className="text-muted">13 days ago</small>
                           </p>
                        </a>
                     </div>
                     {/* All*/}
                     <a
                        href=""
                        className="dropdown-item text-center text-primary notify-item notify-all"
                     >
                        View all
                        <i className="fe-arrow-right" />
                     </a>
                  </div>
               </li>
               {/* end notification */}

               {/* start profile */}
               <li className="dropdown notification-list topbar-dropdown">
                  <a
                     className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
                     data-bs-toggle="dropdown"
                     href="#"
                     role="button"
                     aria-haspopup="false"
                     aria-expanded="false"
                  >
                     <img
                        src="/static/assets/images/users/phokhaing.jpg"
                        alt="user-image"
                        className="rounded-circle"
                     />
                     <span className="pro-user-name ms-1">
                        {user?.fullname} <i className="mdi mdi-chevron-down" />
                     </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                     <div className="dropdown-header noti-title">
                        <h6 className="text-overflow m-0">Welcome !</h6>
                     </div>
                     <a href="" className="dropdown-item notify-item">
                        <i className="fe-user" />
                        <span>My Account</span>
                     </a>
                     <a href="" className="dropdown-item notify-item">
                        <i className="fe-settings" />
                        <span>Settings</span>
                     </a>
                     <a href="" className="dropdown-item notify-item">
                        <i className="fe-lock" />
                        <span>Lock Screen</span>
                     </a>
                     <div className="dropdown-divider" />
                     <a href="" className="dropdown-item notify-item">
                        <i className="fe-log-out" />
                        <span>Logout</span>
                     </a>
                  </div>
               </li>
               {/* end profile */}

               {/* start setting */}
               <li className="dropdown notification-list">
                  <a
                     href=""
                     className="nav-link right-bar-toggle waves-effect waves-light"
                  >
                     <i className="fe-settings noti-icon" />
                  </a>
               </li>
               {/* end profile */}
            </ul>

            {/* start logo */}
            <div className="logo-box">
               <a href="index.html" className="logo logo-dark text-center">
                  <span className="logo-sm">
                     <img
                        src="/static/assets/images/logo/ftb-logo-sm.png"
                        alt="true"
                        height={22}
                     />
                     {/* <span class="logo-lg-text-light">UBold</span> */}
                  </span>
                  <span className="logo-lg">
                     <img
                        src="/static/assets/images/logo-dark.png"
                        alt="true"
                        height={20}
                     />
                     {/* <span class="logo-lg-text-light">U</span> */}
                  </span>
               </a>
               <a href="index.html" className="logo logo-light text-center">
                  <span className="logo-sm">
                     <img
                        src="/static/assets/images/logo/ftb-logo-sm.png"
                        alt="true"
                        height={22}
                     />
                  </span>
                  <span className="logo-lg">
                     {/* <span class="logo-lg-text-light">FTB Bank</span> */}
                     <img
                        src="/static/assets/images/logo/ftb-logo.png"
                        alt="true"
                        height={35}
                     />
                     {/* <span class="logo-lg-text-light">FTB Bank</span> */}
                  </span>
               </a>
            </div>
            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
               <li>
                  <button className="button-menu-mobile waves-effect waves-light">
                     <i className="fe-menu" />
                  </button>
               </li>
               <li>
                  {/* Mobile menu toggle (Horizontal Layout)*/}
                  <a
                     className="navbar-toggle nav-link"
                     data-bs-toggle="collapse"
                     data-bs-target="#topnav-menu-content"
                  >
                     <div className="lines">
                        <span />
                        <span />
                        <span />
                     </div>
                  </a>
                  {/* End mobile menu toggle*/}
               </li>

               <li className="d-none d-lg-block">
                  <form className="app-search">
                     <div className="app-search-box dropdown">
                        <div className="input-group">
                           <input
                              type="search"
                              className="form-control"
                              placeholder="Search..."
                              id="top-search"
                           />
                           <button
                              className="btn input-group-text"
                              type="submit"
                           >
                              <i className="fe-search" />
                           </button>
                        </div>
                        <div
                           className="dropdown-menu dropdown-lg"
                           id="search-dropdown"
                        >
                           <div className="dropdown-header noti-title">
                              <h5 className="text-overflow mb-2">
                                 Found 22 results
                              </h5>
                           </div>
                           <a href="" className="dropdown-item notify-item">
                              <i className="fe-home me-1" />
                              <span>Analytics Report</span>
                           </a>
                           <a href="" className="dropdown-item notify-item">
                              <i className="fe-aperture me-1" />
                              <span>How can I help you?</span>
                           </a>
                           <a href="" className="dropdown-item notify-item">
                              <i className="fe-settings me-1" />
                              <span>User profile settings</span>
                           </a>
                           <div className="dropdown-header noti-title">
                              <h6 className="text-overflow mb-2 text-uppercase">
                                 Users
                              </h6>
                           </div>
                           <div className="notification-list">
                              <a href="" className="dropdown-item notify-item">
                                 <div className="d-flex align-items-start">
                                    <img
                                       className="d-flex me-2 rounded-circle"
                                       src="/static/assets/images/users/user-2.jpg"
                                       alt="Generic placeholder image"
                                       height={32}
                                    />
                                    <div className="w-100">
                                       <h5 className="m-0 font-14">
                                          Erwin E. Brown
                                       </h5>
                                       <span className="font-12 mb-0">
                                          UI Designer
                                       </span>
                                    </div>
                                 </div>
                              </a>
                              <a href="" className="dropdown-item notify-item">
                                 <div className="d-flex align-items-start">
                                    <img
                                       className="d-flex me-2 rounded-circle"
                                       src="/static/assets/images/users/phokhaing.jpg"
                                       alt="Generic placeholder image"
                                       height={32}
                                    />
                                    <div className="w-100">
                                       <h5 className="m-0 font-14">
                                          Jacob Deo
                                       </h5>
                                       <span className="font-12 mb-0">
                                          Developer
                                       </span>
                                    </div>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </form>
               </li>

               {/* <li className="dropdown d-none d-xl-block">
            <a
              className="nav-link dropdown-toggle waves-effect waves-light"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              Create New
              <i className="mdi mdi-chevron-down" />
            </a>
            <div className="dropdown-menu">
              <a href="" className="dropdown-item">
                <i className="fe-briefcase me-1" />
                <span>New Projects</span>
              </a>
              <a href="" className="dropdown-item">
                <i className="fe-user me-1" />
                <span>Create Users</span>
              </a>
              <a href="" className="dropdown-item">
                <i className="fe-bar-chart-line- me-1" />
                <span>Revenue Report</span>
              </a>
              <a href="" className="dropdown-item">
                <i className="fe-settings me-1" />
                <span>Settings</span>
              </a>
              <div className="dropdown-divider" />
              <a href="" className="dropdown-item">
                <i className="fe-headphones me-1" />
                <span>Help &amp; Support</span>
              </a>
            </div>
          </li>
          <li className="dropdown dropdown-mega d-none d-xl-block">
            <a
              className="nav-link dropdown-toggle waves-effect waves-light"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              Mega Menu
              <i className="mdi mdi-chevron-down" />
            </a>
            <div className="dropdown-menu dropdown-megamenu">
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="text-dark mt-0">UI Components</h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="">Widgets</a>
                        </li>
                        <li>
                          <a href="">Nestable List</a>
                        </li>
                        <li>
                          <a href="">Range Sliders</a>
                        </li>
                        <li>
                          <a href="">Masonry Items</a>
                        </li>
                        <li>
                          <a href="">Sweet Alerts</a>
                        </li>
                        <li>
                          <a href="">Treeview Page</a>
                        </li>
                        <li>
                          <a href="">Tour Page</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h5 className="text-dark mt-0">Applications</h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="">eCommerce Pages</a>
                        </li>
                        <li>
                          <a href="">CRM Pages</a>
                        </li>
                        <li>
                          <a href="">Email</a>
                        </li>
                        <li>
                          <a href="">Calendar</a>
                        </li>
                        <li>
                          <a href="">Team Contacts</a>
                        </li>
                        <li>
                          <a href="">Task Board</a>
                        </li>
                        <li>
                          <a href="">Email Templates</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h5 className="text-dark mt-0">Extra Pages</h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="">
                            Left Sidebar with User
                          </a>
                        </li>
                        <li>
                          <a href="">Menu Collapsed</a>
                        </li>
                        <li>
                          <a href="">Small Left Sidebar</a>
                        </li>
                        <li>
                          <a href="">New Header Style</a>
                        </li>
                        <li>
                          <a href="">Search Result</a>
                        </li>
                        <li>
                          <a href="">Gallery Pages</a>
                        </li>
                        <li>
                          <a href="">
                            Maintenance &amp; Coming Soon
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="text-center mt-3">
                    <h3 className="text-dark">Special Discount Sale!</h3>
                    <h4>Save up to 70% off.</h4>
                    <button className="btn btn-primary rounded-pill mt-3">
                      Download Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li> */}
            </ul>
            <div className="clearfix" />
         </div>
      </div>
   );
};

export default Topbar;

// use this to prevent hydration serverside error something like using a <div> tag inside a or <p>
// export default dynamic(() => Promise.resolve(Topbar), { ssr: false });
