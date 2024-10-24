// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// const Layout = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex">

//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
//       <div
//         className={`flex-1 transition-all duration-300 ease-in-out ${
//           isOpen ? "ml-0" : "ml-0"
//         }`}
//       >

//         <Navbar />

//         <main >{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React, { useState } from 'react';
 import Sidebar from "./Sidebar/Sidebar";
 import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto ">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  )
}

export default Layout;
