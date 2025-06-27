import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

import "react-loading-skeleton/dist/skeleton.css";
import BlogCardSkeleton from "../Pages/Shared/BlogCardSkeleton";

const RootLayouts = () => {
  const { state } = useNavigation();
  return (
    <div className="max-w-11/12 mx-auto">
      <Navbar></Navbar>
      {/* {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} */}
      {state == "loading" ? (
        <BlogCardSkeleton></BlogCardSkeleton>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
