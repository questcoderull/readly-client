import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const BlogCard = ({ blog }) => {
  const {
    title,
    photo,
    descriptionShort,
    descriptionLong,
    authorName,
    authorEmail,
  } = blog;
  return (
    <div
      className="flex flex-col sm:flex-row items-center p-4 bg-white border border-blue-400 rounded-xl shadow-md hover:shadow-lg gap-5 transition-transform duration-300  hover:scale-[1.01]
"
    >
      {/* Room Image */}
      <img
        className="w-full sm:w-[200px] h-[220px] rounded-xl object-cover"
        src={photo}
        alt="Room"
      />

      {/* Room Info */}
      <div className="w-full space-y-2">
        {/* Like Count */}
        <div className="flex justify-end items-center gap-1 text-pink-500 text-sm font-semibold">
          <FaHeart className="text-lg" />
          <span>likeCont</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-blue-600">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm">
          {descriptionLong.length > 100
            ? descriptionLong.slice(0, 100) + "..."
            : descriptionLong}
        </p>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <Link className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition">
            View details <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
