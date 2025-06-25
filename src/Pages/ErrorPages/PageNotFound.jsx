import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const PageNOtFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="text-[100px] text-[#FB8500] mb-4">
        <FaExclamationTriangle />
      </div>

      <h1 className="text-6xl font-bold text-[#023047] mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-[#023047] mb-2">
        Page Not Found
      </h2>
      <p className="text-[#023047] mb-6 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        to="/"
        className="btn border-none text-white bg-[#FB8500] hover:bg-[#FFB703] transition-colors duration-300"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
};

export default PageNOtFound;
