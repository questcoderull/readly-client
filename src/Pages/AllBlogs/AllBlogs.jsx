import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BlogCard from "../Shared/BlogCard";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import SearchFilter from "../Shared/SearchFilter";
import BlogCardSkeleton from "../Shared/BlogCardSkeleton";

const AllBlogs = () => {
  const { user } = React.useContext(AuthContext);
  const allBlogs = useLoaderData();

  const [wishlist, setWishlist] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogs, setBlogs] = useState(allBlogs);

  // useEffect(() => {
  //   if (user?.email) {
  //     axios
  //       .get(`https://readly-server.vercel.app/wishlist?email=${user.email}`)
  //       .then((res) => {
  //         setWishlist(res.data);
  //       })
  //       .catch((err) => {
  //         // console.log(err);
  //       });
  //   }
  // }, [user?.email]);

  //from gpt
  useEffect(() => {
    if (user?.email) {
      // Step 1: token নিও
      user.getIdToken().then((token) => {
        // Step 2: token paile axios diye request pataw.
        axios
          .get(
            `https://readly-server.vercel.app/wishlist?email=${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Header-e token patanu
              },
            }
          )
          .then((res) => {
            setWishlist(res.data); // data paile wishlist set koro
          })
          .catch((err) => {
            console.error(err); // jodi error hoy
          });
      });
    }
  }, [user?.email]);

  useEffect(() => {
    let url = `https://readly-server.vercel.app/blogs?`;

    if (searchText) {
      url += `search=${searchText}&`;
    }

    if (selectedCategory !== "all") {
      url += `category=${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => {
        // console.log(err);
      });
  }, [searchText, selectedCategory]);

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#1D3557] mb-2">
          All Blogs
        </h1>
        <p className="text-lg text-[#FB8500] font-medium">
          Explore insightful articles, tips, and stories from various
          categories.
        </p>
      </div>

      {/*  Search & Filter Component */}
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 bg-blue-50 p-8 rounded-lg overflow-hidden">
        {blogs.map((blog) => (
          <Fade key={blog._id} direction="up" duration={500}>
            <BlogCard key={blog._id} blog={blog} wishlist={wishlist} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
