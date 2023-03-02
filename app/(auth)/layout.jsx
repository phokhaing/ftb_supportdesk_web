"use client";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/AuthContext";

import styles from "./styles.module.css";

const AuthLayout = ({ children }) => {
  const theme = {
    backgroundColor: "#0C4DA2",
    textColor: "#c4a006",
    ftbLogo: "/static/assets/images/logo/ftb-logo.png",
    // backgroundImage: "url(/static/assets/images/ftb_background_login.jpg)",
  };

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>FTB Bank</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            content="A fully featured admin theme which can be used to build CRM, CMS, etc."
            name="description"
          />
          <meta content="FTBBank" name="author" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* App favicon */}
          <link
            rel="shortcut icon"
            href="/static/assets/images/logo/ftb-logo.ico"
          />

          <link
            href="/static/assets/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />
          {/* App css */}
          <link
            href="/static/assets/css/app.min.css"
            rel="stylesheet"
            type="text/css"
            id="app-style"
          />
          {/* icons */}
          <link
            href="/static/assets/css/icons.min.css"
            rel="stylesheet"
            type="text/css"
          />
        </head>
        <body className={styles.form_login_backgroundimg}>
          {/* <body className="authentication-bg authentication-bg-pattern"> */}
          {/* Head js */}
          <AuthProvider>
            {children}
            <ToastContainer />
          </AuthProvider>
          <footer
            className={`footer footer-alt text-white-50 ${styles.form_login_footer}`}
          >
            <a
              target="_blank"
              href="https://ftb.com.kh"
              className="text-white-50"
            >
              &copy; {dayjs().year()}Foreign Trade Bank of Cambodia by IT
              Internal Developer
            </a>
          </footer>
        </body>
        {/* © 2023Foreign Trade Bank of Cambodia */}
      </html>
    </>
  );
};

export default AuthLayout;
