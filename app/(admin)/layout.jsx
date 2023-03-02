import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import LoadCSS from "../components/theme/LoadCSS";
import Theme from "../components/theme/Theme";
import { AuthProvider } from "../context/AuthContext";

const RootLayout = async ({ children }) => {
   return (
      <html>
         <head>
            <LoadCSS />
         </head>
         <body
            data-layout-mode="detached"
            data-theme="light"
            data-topbar-color="dark"
            data-menu-position="fixed"
            data-leftbar-color="light"
            data-leftbar-size="default"
            data-sidebar-user="true"
         >
            <AuthProvider>
               <Theme>{children}</Theme>
            </AuthProvider>
         </body>
      </html>
   );
};

export default RootLayout;
