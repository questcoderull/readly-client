import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

import "react-loading-skeleton/dist/skeleton.css";
import BlogCardSkeleton from "../Pages/Shared/BlogCardSkeleton";

const RootLayouts = () => {
  const { state } = useNavigation();
  return (
    <div className="bg-primary">
      <div>
        <div>
          <Navbar></Navbar>
          {/* {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} */}
          {state == "loading" ? (
            <BlogCardSkeleton></BlogCardSkeleton>
          ) : (
            <div className="max-w-7xl mx-auto">
              <Outlet></Outlet>
            </div>
          )}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default RootLayouts;
