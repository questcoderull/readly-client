import React from "react";
import { useLoaderData } from "react-router";
import BlogCard from "../Shared/BlogCard";
import { Fade } from "react-awesome-reveal";

const AllBlogs = () => {
  const allBlogs = useLoaderData();
  console.log(allBlogs);
  return (
    <div>
      <h1>All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 my-10 bg-blue-50 p-8 rounded-lg overflow-hidden">
        {allBlogs.map((blog) => (
          <Fade direction="up" duration={500}>
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
