import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router";
import { categoryColors } from "./Shared/colors";
import { Fade } from "react-awesome-reveal";
import FeaturedTableSkeleton from "./Shared/FeaturedTableSkeleton";

const FeaturedBlogs = () => {
  // const data = useLoaderData();
  // const topTen = data
  //   .sort((a, b) => b.descriptionLong.length - a.descriptionLong.length)
  //   .slice(0, 10);
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        const topTen = data
          .sort((a, b) => b.descriptionLong.length - a.descriptionLong.length)
          .slice(0, 10);
        setFeaturedBlog(topTen);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FeaturedTableSkeleton></FeaturedTableSkeleton>;
  }
  return (
    <div className="min-h-screen bg-blue-50 py-20 px-6 ">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-[#023047] tracking-wide">
        📌 Featured Blogs
      </h1>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-[#023047] rounded-t-lg font-semibold text-white uppercase tracking-wide select-none px-6 py-3">
          <div className="col-span-6">Title</div>
          <div className="col-span-3">Category</div>
          <div className="col-span-3">Author Name</div>
        </div>

        {/* Rows */}
        {featuredBlog.map((blog) => {
          const categoryColor = categoryColors[blog.category] || "#6B7280";

          return (
            <Fade direction="up" duration={500}>
              <Link
                to={`/blog-details/${blog._id}`}
                key={blog._id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer px-6 py-5"
              >
                {/* Title */}
                <div className="col-span-6 text-[#023047] font-medium text-lg break-words">
                  {blog.title}
                </div>

                {/* Category with dynamic bg color */}
                <div
                  className="col-span-3 text-white rounded-md flex items-center justify-center font-semibold"
                  style={{ backgroundColor: categoryColor }}
                >
                  {blog.category}
                </div>

                {/* Author Name */}
                <div className="col-span-3  text-[#023047] rounded-md flex items-center justify-center font-semibold">
                  {blog.authorName}
                </div>
              </Link>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
