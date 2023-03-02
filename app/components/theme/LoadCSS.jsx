"use client";

const LoadCSS = () => {
   return (
      <>
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
         <meta content="Coderthemes" name="author" />
         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
         {/* App favicon */}
         <link
            rel="shortcut icon"
            href="/static/assets/images/logo/ftb-logo.ico"
         />

         {/* third party css */}
         <link
            href="/static/assets/libs/datatables.net-bs5/css/dataTables.bootstrap5.min.css"
            rel="stylesheet"
            type="text/css"
         />
         <link
            href="/static/assets/libs/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css"
            rel="stylesheet"
            type="text/css"
         />
         {/* third party css end */}
         {/* Bootstrap css */}
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
         {/* Head js */}
      </>
   );
};

export default LoadCSS;
