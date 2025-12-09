import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Layout.css";


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{display: "flex"}}>
        <Sidebar />
        <main style={{flex: 1, padding: "20px"}}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
