// "use client";
import Topbar from "./Topbar";
import Leftbar from "./Leftbar";
// import PageTitle from "./pageTitle";
import Footer from "./Footer";
import Rightbar from "./Rightbar";
import LoadScripts from "./LoadScripts";
import ThemeContextProvider from "../../context/ThemeContext";
import CheckAuthenication from "../CheckAuthenication";

import { cookies } from "next/headers";

const Theme = ({ children }) => {
   let cookieStore = cookies();
   let authTokens = JSON.parse(cookieStore.get("authTokens").value);

   return (
      <>
         <ThemeContextProvider>
            <div id="wrapper">
               <>
                  <CheckAuthenication authTokens={authTokens} />

                  <Topbar />
                  <Leftbar />
                  <div className="content-page">
                     <div className="content">{children}</div>
                     <Footer />
                  </div>
               </>
            </div>
            <Rightbar />
            <LoadScripts />
         </ThemeContextProvider>
      </>
   );
};

export default Theme;
