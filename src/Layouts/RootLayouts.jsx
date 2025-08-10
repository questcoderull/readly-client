import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

import "react-loading-skeleton/dist/skeleton.css";
import Loading from "../Pages/Shared/Loading";

const RootLayouts = () => {
  const { state } = useNavigation();
  return (
    <div>
      <div>
        <div>
          <Navbar></Navbar>
          {/* {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} */}
          {state == "loading" ? (
            <Loading></Loading>
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
