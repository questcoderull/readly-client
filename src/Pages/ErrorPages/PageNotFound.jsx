import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

import animationNOtFound from "../../assets/404.json";
import Lottie from "lottie-react";

const PageNOtFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="text-[100px] text-secondary">
        <Lottie animationData={animationNOtFound} loop={true}></Lottie>
      </div>

      <h1 className="text-3xl lg:text-5xl lg:font-bold text-primary lg:-mt-14 z-1 mb-2">
        Page Not Found
      </h1>

      <p className="text-primary mb-2 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        to="/"
        className="btn border-none text-white bg-secondary hover:bg-accent transition-colors duration-300 mb-5"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
};

export default PageNOtFound;
