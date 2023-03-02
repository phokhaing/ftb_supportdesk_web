import Link from "next/link";

const PageTitle = ({ module, slug }) => {
   return (
      <>
         <div className="row">
            <div className="col-12">
               <div className="page-title-box">
                  <div className="page-title-right">
                     <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                           <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                           <Link href="javascript: void(0);">{module}</Link>
                        </li>
                        <li className="breadcrumb-item active">{slug}</li>
                     </ol>
                  </div>
                  <h4 className="page-title">{module}</h4>
               </div>
            </div>
         </div>
      </>
   );
};

export default PageTitle;
