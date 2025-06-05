import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="layout-container">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
    </>
  );
};

export default Layout;
