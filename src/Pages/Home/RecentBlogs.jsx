import React, { useEffect, useState } from "react";
import BlogCardSkeleton from "../Shared/BlogCardSkeleton";
import BlogCard from "../Shared/BlogCard";
import { Bounce, Fade, Hinge, Slide, Zoom } from "react-awesome-reveal";

const RecentBlogs = () => {
  const [filteredBlog, SetFilteredBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/featured-blogs")
      .then((res) => res.json())
      .then((data) => {
        SetFilteredBlog(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-10 bg-blue-50 p-7 rounded-2xl">
      <Bounce>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-[#023047] leading-tight">
          Recent Blogs
        </h1>
      </Bounce>
      {loading ? (
        <BlogCardSkeleton></BlogCardSkeleton>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 my-10 ">
          {filteredBlog.map((blog) => (
            <Slide direction="right">
              <BlogCard key={blog._id} blog={blog}></BlogCard>
            </Slide>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentBlogs;
