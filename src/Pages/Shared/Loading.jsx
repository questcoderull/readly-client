import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-12 h-12 border-4 border-primary border-dashed rounded-full animate-spin"></div>
      <span className="ml-4 text-xl font-medium text-secondary animate-pulse">
        Loading...
      </span>
    </div>
  );
};

export default Loading;
