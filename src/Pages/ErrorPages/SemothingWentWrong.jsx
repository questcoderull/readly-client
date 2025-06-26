import React from "react";

import errorAnimation from "../../assets/error.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const SemothingWentWrong = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-base-200 px-4 mb-15">
        <div className="text-center space-y-6">
          <div className="text-error">
            <Lottie animationData={errorAnimation} loop={true}></Lottie>
          </div>

          <h1 className="text-3xl font-bold text-[#FB8500] lg:-mt-20">
            Something went wrong
          </h1>
          <p className="text-base-content">
            We're sorry, but something unexpected happened. Please try again
            later.
          </p>

          <Link
            to="/"
            className="btn border-none text-white bg-[#023047] hover:bg-[#FFB703] transition-colors duration-300"
          >
            ⬅ Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SemothingWentWrong;
