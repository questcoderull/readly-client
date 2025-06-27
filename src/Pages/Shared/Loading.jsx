import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <span className="ml-4 text-xl font-medium text-blue-700 animate-pulse">
        Loading...
      </span>
    </div>
  );
};

export default Loading;
