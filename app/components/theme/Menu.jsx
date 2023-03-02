"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Menu = () => {
   const { theme } = useContext(ThemeContext);
   const router = useRouter();
   const currentRoute = usePathname();

   const listMenu = [
      {
         name: "Home",
         path: "/",
         icon: "fas fa-home menu-icons",
      },
      {
         name: "User Management",
         path: "/user",
         icon: "fas fa-user-alt",
      },
      {
         name: "Role & Permission",
         path: "/role",
         icon: "fas fa-shield-alt",
      },
   ];

   return (
      <div id="sidebar-menu">
         <ul id="side-menu">
            <li className="menu-title">Navigation</li>

            {listMenu?.map((menu, i) => {
               currentRoute == menu.path;

               return (
                  <li
                     key={i}
                     style={
                        currentRoute == menu.path
                           ? {
                                backgroundColor: `${theme?.backgroundColor}`,
                                borderRadius: "0 15px",
                             }
                           : {}
                     }
                  >
                     <Link href={menu.path} legacyBehavior>
                        <a
                           className={currentRoute == menu.path ? "active" : ""}
                           style={
                              currentRoute == menu.path
                                 ? { color: `${theme?.activeColor}` }
                                 : {}
                           }
                        >
                           <i className={menu.icon} aria-hidden="true"></i>
                           <span
                              style={
                                 currentRoute == menu.path
                                    ? { fontWeight: "500" }
                                    : {}
                              }
                           >
                              {menu.name}
                           </span>
                        </a>
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Menu;
