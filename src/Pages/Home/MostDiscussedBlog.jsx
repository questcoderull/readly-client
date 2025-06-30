import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import commentAnimation from "../../assets/discussion.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { categoryColors } from "../Shared/colors";

const MostDiscussedBlog = ({ blogs }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://readly-server.vercel.app/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const blogsWithCommentCount = blogs.map((blog) => {
    const count = comments.filter((c) => c.blogId === blog._id).length;
    return { ...blog, commentCount: count };
  });

  const topDiscussed = blogsWithCommentCount
    .sort((a, b) => b.commentCount - a.commentCount)
    .slice(0, 6);

  return (
    <div className=" px-4 md:px-6 py-12">
      <h2 className="text-3xl font-bold text-[#023047] mb-6 text-center">
        💬 Most Discussed Blogs
      </h2>

      {/* Animation Top */}
      <div className="flex justify-center mb-10">
        <Lottie
          animationData={commentAnimation}
          loop
          className="w-[280px] md:w-[350px] h-auto"
        />
      </div>

      {/* Animated Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topDiscussed.map((blog, index) => {
          const categoryColor = categoryColors[blog.category] || "#6B7280";
          return (
            <motion.div
              key={blog._id}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#1D3557] mb-1">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Category:{" "}
                <span className="font-medium" style={{ color: categoryColor }}>
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MostDiscussedBlog;
