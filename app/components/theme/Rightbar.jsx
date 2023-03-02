"use client";

const Rightbar = () => {
   return (
      <>
         <div className="right-bar">
            <div data-simplebar className="h-100">
               {/* Nav tabs */}
               <ul
                  className="nav nav-tabs nav-bordered nav-justified"
                  role="tablist"
               >
                  <li className="nav-item">
                     <a
                        className="nav-link py-2"
                        data-bs-toggle="tab"
                        href="#chat-tab"
                        role="tab"
                     >
                        <i className="mdi mdi-message-text d-block font-22 my-1" />
                     </a>
                  </li>
                  <li className="nav-item">
                     <a
                        className="nav-link py-2"
                        data-bs-toggle="tab"
                        href="#tasks-tab"
                        role="tab"
                     >
                        <i className="mdi mdi-format-list-checkbox d-block font-22 my-1" />
                     </a>
                  </li>
                  <li className="nav-item">
                     <a
                        className="nav-link py-2 active"
                        data-bs-toggle="tab"
                        href="#settings-tab"
                        role="tab"
                     >
                        <i className="mdi mdi-cog-outline d-block font-22 my-1" />
                     </a>
                  </li>
               </ul>
               {/* Tab panes */}
               <div className="tab-content pt-0">
                  <div className="tab-pane" id="chat-tab" role="tabpanel">
                     <form className="search-bar p-3">
                        <div className="position-relative">
                           <input
                              type="text"
                              className="form-control"
                              placeholder="Search..."
                           />
                           <span className="mdi mdi-magnify" />
                        </div>
                     </form>
                     <h6 className="fw-medium px-3 mt-2 text-uppercase">
                        Group Chats
                     </h6>
                     <div className="p-2">
                        <a
                           href=""
                           className="text-reset notification-item ps-3 mb-2 d-block"
                        >
                           <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-success" />
                           <span className="mb-0 mt-1">App Development</span>
                        </a>
                        <a
                           href=""
                           className="text-reset notification-item ps-3 mb-2 d-block"
                        >
                           <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-warning" />
                           <span className="mb-0 mt-1">Office Work</span>
                        </a>
                        <a
                           href=""
                           className="text-reset notification-item ps-3 mb-2 d-block"
                        >
                           <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-danger" />
                           <span className="mb-0 mt-1">Personal Group</span>
                        </a>
                        <a
                           href=""
                           className="text-reset notification-item ps-3 d-block"
                        >
                           <i className="mdi mdi-checkbox-blank-circle-outline me-1" />
                           <span className="mb-0 mt-1">Freelance</span>
                        </a>
                     </div>
                     <h6 className="fw-medium px-3 mt-3 text-uppercase">
                        Favourites{" "}
                        <a href="" className="font-18 text-danger">
                           <i className="float-end mdi mdi-plus-circle" />
                        </a>
                     </h6>
                     <div className="p-2">
                        <a href="" className="text-reset notification-item">
                           <div className="d-flex align-items-start noti-user-item">
                              <div className="position-relative me-2">
                                 <img
                                    src="/static/assets/images/users/user-10.jpg"
                                    className="rounded-circle avatar-sm"
                                    alt="user-pic"
                                 />
                                 <i className="mdi mdi-circle user-status online" />
                              </div>
                              <div className="overflow-hidden">
                                 <h6 className="mt-0 mb-1 font-14">
                                    Andrew Mackie
                                 </h6>
                                 <div className="font-13 text-muted">
                                    <p className="mb-0 text-truncate">
                                       It will seem like simplified English.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                           <div className="d-flex align-items-start noti-user-item">
                              <div className="position-relative me-2">
                                 <img
                                    src="/static/assets/images/users/user-1.jpg"
                                    className="rounded-circle avatar-sm"
                                    alt="user-pic"
                                 />
                                 <i className="mdi mdi-circle user-status away" />
                              </div>
                              <div className="overflow-hidden">
                                 <h6 className="mt-0 mb-1 font-14">
                                    Rory Dalyell
                                 </h6>
                                 <div className="font-13 text-muted">
                                    <p className="mb-0 text-truncate">
                                       To an English person, it will seem like
                                       simplified
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                           <div className="d-flex align-items-start noti-user-item">
                              <div className="position-relative me-2">
                                 <img
                                    src="/static/assets/images/users/user-9.jpg"
                                    className="rounded-circle avatar-sm"
                                    alt="user-pic"
                                 />
                                 <i className="mdi mdi-circle user-status busy" />
                              </div>
                              <div className="overflow-hidden">
                                 <h6 className="mt-0 mb-1 font-14">
                                    Jaxon Dunhill
                                 </h6>
                                 <div className="font-13 text-muted">
                                    <p className="mb-0 text-truncate">
                                       To achieve this, it would be necessary.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </a>
                     </div>
                     <h6 className="fw-medium px-3 mt-3 text-uppercase">
                        Other Chats{" "}
                        <a href="" className="font-18 text-danger">
                           <i className="float-end mdi mdi-plus-circle" />
                        </a>
                     </h6>
                     <div className="p-2 pb-4">
                        <a href="" className="text-reset notification-item">
                           <div className="d-flex align-items-start noti-user-item">
                              <div className="position-relative me-2">
                                 <img
                                    src="/static/assets/images/users/user-2.jpg"
                                    className="rounded-circle avatar-sm"
                                    alt="user-pic"
                                 />
                                 <i className="mdi mdi-circle user-status online" />
                              </div>
                              <div className="overflow-hidden">
                                 <h6 className="mt-0 mb-1 font-14">
                                    Jackson Therry
                                 </h6>
                                 <div className="font-13 text-muted">
                                    <p className="mb-0 text-truncate">
                                       Everyone realizes why a new common
                                       language.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                           <div className="d-flex align-items-start noti-user-item">
                              <div className="position-relative me-2">
                                 <img
                                    src="/static/assets/images/users/user-4.jpg"
                                    className="rounded-circle avatar-sm"
                                    alt="user-pic"
                                 />
                                 <i className="mdi mdi-circle user-status away" />
                              </div>
                              <div className="overflow-hidden">
                                 <h6 className="mt-0 mb-1 font-14">
                                    Charles Deakin
                                 </h6>
                                 <div className="font-13 text-muted">
                                    <p className="mb-0 text-truncate">
                                       The languages only differ in their
                                       grammar.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                           <div className="d-flex align-items-start noti-user-item">
                              <div className="position-relative me-2">
                                 <img
                                    src="/static/assets/images/users/user-5.jpg"
                                    className="rounded-circle avatar-sm"
                                    alt="user-pic"
                                 />
                                 <i className="mdi mdi-circle user-status online" />
                              </div>
                              <div className="overflow-hidden">
                                 <h6 className="mt-0 mb-1 font-14">
                                    Ryan Salting
                                 </h6>
                                 <div className="font-13 text-muted">
                                    <p className="mb-0 text-truncate">
                                       If several languages coalesce the grammar
                                       of the resulting.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                           <div className="d-flex align-items-start noti-user-item">
                              <div className="position-relative me-2">
                                 <img
                                    src="/static/assets/images/users/user-6.jpg"
                                    className="rounded-circle avatar-sm"
                                    alt="user-pic"
                                 />
                                 <i className="mdi mdi-circle user-status online" />
                              </div>
                              <div className="overflow-hidden">
                                 <h6 className="mt-0 mb-1 font-14">
                                    Sean Howse
                                 </h6>
                                 <div className="font-13 text-muted">
                                    <p className="mb-0 text-truncate">
                                       It will seem like simplified English.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                           <div className="d-flex align-items-start noti-user-item">
                              <div className="position-relative me-2">
                                 <img
                                    src="/static/assets/images/users/user-7.jpg"
                                    className="rounded-circle avatar-sm"
                                    alt="user-pic"
                                 />
                                 <i className="mdi mdi-circle user-status busy" />
                              </div>
                              <div className="overflow-hidden">
                                 <h6 className="mt-0 mb-1 font-14">
                                    Dean Coward
                                 </h6>
                                 <div className="font-13 text-muted">
                                    <p className="mb-0 text-truncate">
                                       The new common language will be more
                                       simple.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                           <div className="d-flex align-items-start noti-user-item">
                              <div className="position-relative me-2">
                                 <img
                                    src="/static/assets/images/users/user-8.jpg"
                                    className="rounded-circle avatar-sm"
                                    alt="user-pic"
                                 />
                                 <i className="mdi mdi-circle user-status away" />
                              </div>
                              <div className="overflow-hidden">
                                 <h6 className="mt-0 mb-1 font-14">
                                    Hayley East
                                 </h6>
                                 <div className="font-13 text-muted">
                                    <p className="mb-0 text-truncate">
                                       One could refuse to pay expensive
                                       translators.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <div className="text-center mt-3">
                           <a href="" className="btn btn-sm btn-white">
                              <i className="mdi mdi-spin mdi-loading me-2" />
                              Load more
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane" id="tasks-tab" role="tabpanel">
                     <h6 className="fw-medium p-3 m-0 text-uppercase">
                        Working Tasks
                     </h6>
                     <div className="px-2">
                        <a
                           href=""
                           className="text-reset item-hovered d-block p-2"
                        >
                           <p className="text-muted mb-0">
                              App Development
                              <span className="float-end">75%</span>
                           </p>
                           <div className="progress mt-2" style={{ height: 4 }}>
                              <div
                                 className="progress-bar bg-success"
                                 role="progressbar"
                                 style={{ width: "75%" }}
                                 aria-valuenow={75}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                              />
                           </div>
                        </a>
                        <a
                           href=""
                           className="text-reset item-hovered d-block p-2"
                        >
                           <p className="text-muted mb-0">
                              Database Repair
                              <span className="float-end">37%</span>
                           </p>
                           <div className="progress mt-2" style={{ height: 4 }}>
                              <div
                                 className="progress-bar bg-info"
                                 role="progressbar"
                                 style={{ width: "37%" }}
                                 aria-valuenow={37}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                              />
                           </div>
                        </a>
                        <a
                           href=""
                           className="text-reset item-hovered d-block p-2"
                        >
                           <p className="text-muted mb-0">
                              Backup Create
                              <span className="float-end">52%</span>
                           </p>
                           <div className="progress mt-2" style={{ height: 4 }}>
                              <div
                                 className="progress-bar bg-warning"
                                 role="progressbar"
                                 style={{ width: "52%" }}
                                 aria-valuenow={52}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                              />
                           </div>
                        </a>
                     </div>
                     <h6 className="fw-medium px-3 mb-0 mt-4 text-uppercase">
                        Upcoming Tasks
                     </h6>
                     <div className="p-2">
                        <a
                           href=""
                           className="text-reset item-hovered d-block p-2"
                        >
                           <p className="text-muted mb-0">
                              Sales Reporting
                              <span className="float-end">12%</span>
                           </p>
                           <div className="progress mt-2" style={{ height: 4 }}>
                              <div
                                 className="progress-bar bg-danger"
                                 role="progressbar"
                                 style={{ width: "12%" }}
                                 aria-valuenow={12}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                              />
                           </div>
                        </a>
                        <a
                           href=""
                           className="text-reset item-hovered d-block p-2"
                        >
                           <p className="text-muted mb-0">
                              Redesign Website
                              <span className="float-end">67%</span>
                           </p>
                           <div className="progress mt-2" style={{ height: 4 }}>
                              <div
                                 className="progress-bar bg-primary"
                                 role="progressbar"
                                 style={{ width: "67%" }}
                                 aria-valuenow={67}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                              />
                           </div>
                        </a>
                        <a
                           href=""
                           className="text-reset item-hovered d-block p-2"
                        >
                           <p className="text-muted mb-0">
                              New Admin Design
                              <span className="float-end">84%</span>
                           </p>
                           <div className="progress mt-2" style={{ height: 4 }}>
                              <div
                                 className="progress-bar bg-success"
                                 role="progressbar"
                                 style={{ width: "84%" }}
                                 aria-valuenow={84}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                              />
                           </div>
                        </a>
                     </div>
                     <div className="p-3 mt-2 d-grid">
                        <a
                           href=""
                           className="btn btn-success waves-effect waves-light"
                        >
                           Create Task
                        </a>
                     </div>
                  </div>
                  <div
                     className="tab-pane active"
                     id="settings-tab"
                     role="tabpanel"
                  >
                     <h6 className="fw-medium px-3 m-0 py-2 font-13 text-uppercase bg-light">
                        <span className="d-block py-1">Theme Settings</span>
                     </h6>
                     <div className="p-3">
                        <div className="alert alert-warning" role="alert">
                           <strong>Customize </strong> the overall color scheme,
                           sidebar menu, etc.
                        </div>
                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
                           Color Scheme
                        </h6>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="layout-color"
                              defaultValue="light"
                              id="light-mode-check"
                              defaultChecked
                           />
                           <label
                              className="form-check-label"
                              htmlFor="light-mode-check"
                           >
                              Light Mode
                           </label>
                        </div>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="layout-color"
                              defaultValue="dark"
                              id="dark-mode-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="dark-mode-check"
                           >
                              Dark Mode
                           </label>
                        </div>
                        {/* Width */}
                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
                           Width
                        </h6>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="layout-width"
                              defaultValue="fluid"
                              id="fluid-check"
                              defaultChecked
                           />
                           <label
                              className="form-check-label"
                              htmlFor="fluid-check"
                           >
                              Fluid
                           </label>
                        </div>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="layout-width"
                              defaultValue="boxed"
                              id="boxed-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="boxed-check"
                           >
                              Boxed
                           </label>
                        </div>
                        {/* Menu positions */}
                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
                           Layout Position
                        </h6>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="menu-position"
                              defaultValue="fixed"
                              id="fixed-check"
                              defaultChecked
                           />
                           <label
                              className="form-check-label"
                              htmlFor="fixed-check"
                           >
                              Fixed
                           </label>
                        </div>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="menu-position"
                              defaultValue="scrollable"
                              id="scrollable-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="scrollable-check"
                           >
                              Scrollable
                           </label>
                        </div>
                        {/* Left Sidebar*/}
                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
                           Left Sidebar Color
                        </h6>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="leftbar-color"
                              defaultValue="light"
                              id="light-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="light-check"
                           >
                              Light
                           </label>
                        </div>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="leftbar-color"
                              defaultValue="dark"
                              id="dark-check"
                              defaultChecked
                           />
                           <label
                              className="form-check-label"
                              htmlFor="dark-check"
                           >
                              Dark
                           </label>
                        </div>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="leftbar-color"
                              defaultValue="brand"
                              id="brand-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="brand-check"
                           >
                              Brand
                           </label>
                        </div>
                        <div className="form-check form-switch mb-3">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="leftbar-color"
                              defaultValue="gradient"
                              id="gradient-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="gradient-check"
                           >
                              Gradient
                           </label>
                        </div>
                        {/* size */}
                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
                           Left Sidebar Size
                        </h6>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="leftbar-size"
                              defaultValue="default"
                              id="default-size-check"
                              defaultChecked
                           />
                           <label
                              className="form-check-label"
                              htmlFor="default-size-check"
                           >
                              Default
                           </label>
                        </div>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="leftbar-size"
                              defaultValue="condensed"
                              id="condensed-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="condensed-check"
                           >
                              Condensed <small>(Extra Small size)</small>
                           </label>
                        </div>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="leftbar-size"
                              defaultValue="compact"
                              id="compact-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="compact-check"
                           >
                              Compact <small>(Small size)</small>
                           </label>
                        </div>
                        {/* User info */}
                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
                           Sidebar User Info
                        </h6>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="sidebar-user"
                              defaultValue="fixed"
                              id="sidebaruser-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="sidebaruser-check"
                           >
                              Enable
                           </label>
                        </div>
                        {/* Topbar */}
                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
                           Topbar
                        </h6>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="topbar-color"
                              defaultValue="dark"
                              id="darktopbar-check"
                              defaultChecked
                           />
                           <label
                              className="form-check-label"
                              htmlFor="darktopbar-check"
                           >
                              Dark
                           </label>
                        </div>
                        <div className="form-check form-switch mb-1">
                           <input
                              type="checkbox"
                              className="form-check-input"
                              name="topbar-color"
                              defaultValue="light"
                              id="lighttopbar-check"
                           />
                           <label
                              className="form-check-label"
                              htmlFor="lighttopbar-check"
                           >
                              Light
                           </label>
                        </div>
                        <div className="d-grid mt-4">
                           <button className="btn btn-primary" id="resetBtn">
                              Reset to Default
                           </button>
                           <a
                              href="https://1.envato.market/uboldadmin"
                              className="btn btn-danger mt-3"
                              target="_blank"
                           >
                              <i className="mdi mdi-basket me-1" /> Purchase Now
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>{" "}
            {/* end slimscroll-menu*/}
         </div>
         {/* /Right-bar */}
         {/* Right bar overlay*/}
         <div className="rightbar-overlay" />
      </>
   );
};

export default Rightbar;
