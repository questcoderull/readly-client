import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import commentAnimation from "../../assets/discussion.json";
import Lottie from "lottie-react";

const MostDiscussedBlog = ({ blogs }) => {
  // 1. Load all blogs and all comments
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  // 2. Count comments for each blog
  const blogsWithCommentCount = blogs.map((blog) => {
    const count = comments.filter((c) => c.blogId === blog._id).length;
    return { ...blog, commentCount: count };
  });

  // 3. Sort by comment count and take top 5
  const topDiscussed = blogsWithCommentCount
    .sort((a, b) => b.commentCount - a.commentCount)
    .slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl font-bold text-[#023047] mb-6 text-center">
        💬 Most Discussed Blogs
      </h2>

      {/* Animation - Always on Top and Centered */}
      <div className="flex justify-center mb-10">
        <Lottie
          animationData={commentAnimation}
          loop
          className="w-[280px] md:w-[350px] h-auto"
        />
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topDiscussed.map((blog) => (
          <div
            key={blog._id}
            className="p-6 bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold text-[#1D3557] mb-1">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Category:{" "}
              <span className="font-medium text-[#FB8500]">
                {blog.category}
              </span>
            </p>
            <p className="text-sm text-gray-500 mb-3">
              💬 {blog.commentCount} comments
            </p>
            <Link
              to={`/blog-details/${blog._id}`}
              className="inline-block text-sm font-medium text-white bg-[#023047] px-4 py-1.5 rounded-full hover:bg-[#035070] transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostDiscussedBlog;
