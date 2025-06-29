import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BlogCard from "../Shared/BlogCard";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

const AllBlogs = () => {
  const { user } = use(AuthContext);
  const allBlogs = useLoaderData();
  // console.log(allBlogs);

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/wishlist?email=${user.email}`)
        .then((res) => {
          setWishlist(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user?.email]);

  return (
    <div>
      <h1>All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 my-10 bg-blue-50 p-8 rounded-lg overflow-hidden">
        {allBlogs.map((blog) => (
          <Fade direction="up" duration={500}>
            <BlogCard key={blog._id} blog={blog} wishlist={wishlist}></BlogCard>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
