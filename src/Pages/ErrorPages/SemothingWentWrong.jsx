import React from "react";

const SemothingWentWrong = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
        <div className="text-center space-y-6">
          <div className="text-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto w-20 h-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-error">
            Something went wrong
          </h1>
          <p className="text-base-content">
            We're sorry, but something unexpected happened. Please try again
            later.
          </p>

          <button className="btn btn-error text-white">Go Home</button>
        </div>
      </div>
    </div>
  );
};

export default SemothingWentWrong;
