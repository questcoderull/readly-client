import React, { useEffect, useState } from "react";
import BlogCard from "../Shared/BlogCard";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import SearchFilter from "../Shared/SearchFilter";
import BlogCardSkeleton from "../Shared/BlogCardSkeleton";

const AllBlogs = () => {
  const { user } = React.useContext(AuthContext);

  const [wishlist, setWishlist] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Wishlist fetch
  useEffect(() => {
    if (user?.email) {
      user.getIdToken().then((token) => {
        axios
          .get(
            `https://readly-server.vercel.app/wishlist?email=${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            setWishlist(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      });
    }
  }, [user?.email]);

  // Blogs fetch
  useEffect(() => {
    setLoading(true);
    let url = `https://readly-server.vercel.app/blogs?`;

    if (searchText) {
      url += `search=${searchText}&`;
    }

    if (selectedCategory !== "all") {
      url += `category=${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [searchText, selectedCategory]);

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#1D3557] mb-2">
          All Blogs
        </h1>
        <p className="text-lg text-[#1D3557] font-medium">
          Explore insightful articles, tips, and stories from various
          categories.
        </p>
      </div>

      {/* Search & Filter Component */}
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {loading && <BlogCardSkeleton></BlogCardSkeleton>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 bg-blue-50 p-8 rounded-lg overflow-hidden">
        {blogs.map((blog) => (
          <Fade key={blog._id} direction="up" duration={500}>
            <BlogCard blog={blog} wishlist={wishlist} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
