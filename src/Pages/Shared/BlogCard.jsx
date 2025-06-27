import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router";

// const categoryColors = {
//   Technology: "#3B82F6",
//   Travel: "#FB923C",
//   Finance: "#22C55E",
//   Education: "#A855F7",
//   Marketing: "#F59E0B",
//   Health: "#EF4444",
//   Productivity: "#14B8A6",
//   Career: "#8B5CF6",
//   Others: "#64748B",
// };

const categoryColors = {
  Technology: "#F43F5E",
  Travel: "#3B82F6",
  Finance: "#22C55E",
  Education: "#A855F7",
  Marketing: "#EAB308",
  Health: "#EF4444",
  Productivity: "#14B8A6",
  Career: "#8B5CF6",
  Others: "#64748B",
};

const BlogCard = ({ blog }) => {
  const { _id, title, photo, descriptionLong, category } = blog;

  const badgeColor = categoryColors[category] || "#6B7280";
  return (
    //     <div
    //       className="flex flex-col sm:flex-row items-center p-4 bg-white border border-blue-400 rounded-xl shadow-md hover:shadow-lg gap-5 transition-transform duration-300  hover:scale-[1.01]
    // "
    //     >
    //       {/* Room Image */}
    //       <img
    //         className="w-full sm:w-[200px] h-[220px] rounded-xl object-cover"
    //         src={photo}
    //         alt="Room"
    //       />

    //       {/* Room Info */}
    //       <div className="w-full space-y-2">
    //         {/* Like Count */}
    //         <div className="flex justify-end items-center gap-1 text-pink-500 text-sm font-semibold">
    //           <FaHeart className="text-lg" />
    //           <span>0</span>
    //         </div>

    //         {/* Title */}
    //         <h2 className="text-xl font-bold text-[#023047]">{title}</h2>

    //         {/* Description */}
    //         <p className="text-gray-600 text-sm">
    //           {descriptionLong.length > 100
    //             ? descriptionLong.slice(0, 100) + "..."
    //             : descriptionLong}
    //         </p>

    //         {/* Footer Section */}
    //         <div className="flex justify-between items-center mt-4 text-sm">
    //           <Link className="flex items-center gap-1 text-[#FB8500] hover:text-[#023047] transition">
    //             View details <FaArrowRight />
    //           </Link>

    //           <span className="badge bg-[#FB8500] text-white">{category}</span>
    //         </div>
    //       </div>
    //     </div>

    // polished
    <div className="flex flex-col sm:flex-row items-center p-4 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg gap-5 transition-transform duration-300 hover:scale-[1.01]">
      {/* Blog Image */}
      <img
        className="w-full sm:w-[220px] h-[220px] rounded-xl object-cover"
        src={photo}
        alt="Blog Cover"
      />

      {/* Blog Info */}
      <div className="w-full space-y-3">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#1D3557]">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {descriptionLong.length > 100
            ? descriptionLong.slice(0, 100) + "..."
            : descriptionLong}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-3 text-sm">
          <Link
            to={`/blog-details/${_id}`}
            className="flex items-center gap-1 text-[#457B9D] hover:text-[#1D3557] transition"
          >
            View details <FaArrowRight />
          </Link>

          {/* Custom badge with soft orange bg
          <span className="px-3 py-1 bg-[#FFA500]/90 text-white text-xs rounded-full font-medium shadow-sm">
            {category}
          </span> */}

          {/* Dynamic Badge */}
          <span
            className="px-3 py-1 text-white text-xs rounded-full font-medium shadow-sm"
            style={{ backgroundColor: badgeColor }}
          >
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
