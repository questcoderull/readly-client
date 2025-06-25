import React from "react";
import { MdErrorOutline } from "react-icons/md";

const PageNOtFound = () => {
  return (
    // main code
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
      <div className="text-center space-y-6">
        <div className="text-error">
          <MdErrorOutline className="mx-auto text-[80px]" />
        </div>

        <h1 className="text-4xl font-bold text-error">404 - Page Not Found</h1>
        <p className="text-base-content max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <button className="btn btn-error text-white">Go to Homepage</button>
      </div>
    </div>
  );
};

export default PageNOtFound;
