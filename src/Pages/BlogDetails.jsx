import React, { use } from "react";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

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

const BlogDetails = () => {
  const { user } = use(AuthContext);
  const {
    title,
    photo,
    category,
    descriptionShort,
    descriptionLong,
    authorName,
    authorEmail,
  } = useLoaderData();

  const badgeColor = categoryColors[category] || "#6B7280";

  return (
    <div className="bg-blue-50 py-10 px-4 my-10 rounded-xl">
      {/* Blog Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:shadow-lg">
        {/* Image */}
        <img
          className="w-full h-[300px] object-cover"
          src={photo}
          alt={title}
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Category Badge */}
          <span
            className="inline-block px-3 py-1 text-white text-xs rounded-full font-medium shadow-sm"
            style={{ backgroundColor: badgeColor }}
          >
            {category}
          </span>

          {/* Title */}
          <h2 className="text-3xl font-bold text-[#1D3557]">{title}</h2>

          {/* Posted By Section */}
          <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-1">
            <p className="font-semibold">Posted by:</p>
            <p>
              <span className="font-medium">Name:</span> {authorName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {authorEmail}
            </p>
          </div>

          {/* Short Description */}
          <p className="text-gray-600 text-base">{descriptionShort}</p>

          {/* Long Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            {descriptionLong}
          </p>
        </div>
      </div>

      {/* Comment Section */}
      <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-bold text-[#1D3557]">Comments</h3>

        {/* Comment Form */}
        {user ? (
          <form className="space-y-2">
            <textarea
              placeholder="Write your comment..."
              className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
              required
            />
            <button
              type="submit"
              className="bg-[#1D3557] text-white px-4 py-2 rounded hover:bg-[#163456] transition"
            >
              Post Comment
            </button>
          </form>
        ) : (
          <p className="text-sm text-gray-600 italic">
            Please log in to post a comment.
          </p>
        )}

        {/* Comment List */}
        <div className="space-y-3 pt-2">
          <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
            <p className="text-sm font-semibold text-[#1D3557]">
              John Doe{" "}
              <span className="text-xs text-gray-500">
                (June 27, 2025 - 9:30 AM)
              </span>
            </p>
            <p className="text-sm text-gray-700 mt-1">
              This blog is really informative and helpful!
            </p>
          </div>
          <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
            <p className="text-sm font-semibold text-[#1D3557]">
              Sarah Ali{" "}
              <span className="text-xs text-gray-500">
                (June 26, 2025 - 5:12 PM)
              </span>
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Thank you for sharing this topic. Loved it!
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 text-center space-x-4 space-y-2">
        <Link to="/" className="btn bg-[#1D3557] text-white">
          <span className="hidden md:block">Back To Home</span>
          <span className="block md:hidden">Home</span>
        </Link>
        <Link to="/all-blogs" className="btn bg-[#FB8500] text-white">
          <span className="hidden md:block">All Blogs</span>
          <span className="block md:hidden">Blogs</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
