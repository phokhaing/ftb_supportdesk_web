"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6">
                  Copyright © {new Date().getFullYear()}{" "}
               </div>
               <div className="col-md-6">
                  <div className="text-md-end footer-links d-none d-sm-block">
                     <Link href="https://ftb.com.kh" target="_blank">
                        Foreign Trade Bank of Cambodia
                     </Link>
                     {/* <Link href="https://ftb.com.kh">Help</Link>
                     <Link href="https://ftb.com.kh">Contact Us</Link> */}
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
