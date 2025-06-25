import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const RootLayouts = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
