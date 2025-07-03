import React, { use, useEffect, useState } from "react";
import BlogCardSkeleton from "../Shared/BlogCardSkeleton";
import BlogCard from "../Shared/BlogCard";
import { Bounce, Fade, Hinge, Slide, Zoom } from "react-awesome-reveal";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

const RecentBlogs = () => {
  const { user } = use(AuthContext);
  const [filteredBlog, SetFilteredBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://readly-server.vercel.app/featured-blogs")
      .then((res) => res.json())
      .then((data) => {
        SetFilteredBlog(data);
        setLoading(false);
      });
  }, []);

  const [wishlist, setWishlist] = useState([]);

  // useEffect(() => {
  //   if (user?.email) {
  //     axios
  //       .get(`https://readly-server.vercel.app/wishlist?email=${user.email}`)
  //       .then((res) => {
  //         setWishlist(res.data);
  //       })
  //       .catch((err) => {
  //         // console.log(err)
  //       });
  //   }
  // }, [user?.email]);

  //from gpt
  useEffect(() => {
    if (user?.email) {
      // Step 1: token নিও
      user.getIdToken().then((token) => {
        // Step 2: token পেলে axios দিয়ে req পাঠাও
        axios
          .get(
            `https://readly-server.vercel.app/wishlist?email=${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Header-এ token পাঠাও
              },
            }
          )
          .then((res) => {
            setWishlist(res.data); // data পেলে wishlist set করো
          })
          .catch((err) => {
            console.error(err); // যদি error হয়
          });
      });
    }
  }, [user?.email]);

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
              <BlogCard
                key={blog._id}
                blog={blog}
                wishlist={wishlist}
              ></BlogCard>
            </Slide>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentBlogs;
