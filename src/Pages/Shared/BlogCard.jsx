import React, { use, useEffect, useState } from "react";
import { FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import { playSoundAlert, playSoundSuccess } from "./soundEffect";
import toast from "react-hot-toast";
import { categoryColors } from "./colors";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const BlogCard = ({ blog, wishlist }) => {
  const { user } = use(AuthContext);
  const [isClicked, setIsClicked] = useState(false);

  const {
    _id,
    title,
    photo,
    descriptionLong,
    category,
    authorName,
    authorPhoto,
  } = blog;

  const badgeColor = categoryColors[category] || "#6B7280";

  // useEffect(() => {
  //   if (!user?.email) return;

  //   axios
  //     .get(`https://readly-server.vercel.app/wishlist?email=${user.email}`)
  //     .then((res) => {
  //       const wishedBlogs = res.data;
  //       const alreadyWished = wishedBlogs.some(
  //         (item) => item.blogId === blog._id
  //       );
  //       if (alreadyWished) {
  //         setIsClicked(true);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Error checking wishlist:", err);
  //     });
  // }, [user?.email, blog._id]);

  useEffect(() => {
    if (!user?.email || !wishlist) return;

    const alreadyWished = wishlist.some((item) => item.blogId === _id);

    if (alreadyWished) {
      setIsClicked(true);
    }
  }, [user?.email, wishlist, _id]);

  const hadleWishLished = () => {
    if (!user) {
      playSoundAlert();
      toast.error("you cann't add it wihout logged in", {
        duration: 6000,
      });

      return;
    }

    if (isClicked) {
      if (isClicked) {
        playSoundAlert();
        toast.error(
          <span>
            <span style={{ color: badgeColor }}>{title}</span> is already added
          </span>,
          {
            duration: 6000,
          }
        );
        return;
      }
    }

    const wishedBlog = {
      blogId: _id,
      title,
      category,
      authorName,
      email: user?.email,
    };

    // sending to databse
    axios
      .post("https://readly-server.vercel.app/wishlist", wishedBlog)
      .then((res) => {
        // console.log(res.data);
        playSoundSuccess();
        setIsClicked(true);
        toast.success(
          <span>
            <span style={{ color: badgeColor }}>{title}</span> added to wishlist
          </span>,
          {
            duration: 6000,
          }
        );
      })
      .catch((error) => {
        // console.log(error);
        playSoundAlert();
        if (error.response?.status === 409) {
          setIsClicked(true);
          toast.error(
            <span>
              <span style={{ color: badgeColor }}>{title}</span> is already
              added
            </span>,
            {
              duration: 6000,
            }
          );
        }
      });
  };

  return (
    // polished
    <div className="flex flex-col lg:flex-row items-center p-4 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg gap-5 transition-transform duration-300 hover:scale-[1.01]">
      {/* Blog Image */}
      <img
        className="w-full sm:w-[220px] h-[220px] rounded-xl object-cover"
        src={photo}
        alt="Blog Cover"
      />

      {/* Blog Info */}
      <div className="w-full space-y-3 cursor-pointer">
        {/* Like Count */}
        <div className="flex justify-end items-center gap-1 text-rose-500 text-sm font-medium">
          <span>{isClicked ? "Added" : "Add To Wishlist"}</span>
          <button onClick={hadleWishLished} className="cursor-pointer">
            {isClicked ? (
              <FaHeart className="text-red-500 text-xl transition-all duration-300" />
            ) : (
              <FaRegHeart className="text-red-500 text-xl transition-all duration-300" />
            )}
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#1D3557]">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {descriptionLong.length > 100
            ? descriptionLong.slice(0, 100) + "..."
            : descriptionLong}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-3 text-sm">
          <Link
            to={`/blog-details/${_id}`}
            className="flex items-center gap-1 text-[#457B9D] hover:text-[#1D3557] transition"
          >
            View details <FaArrowRight />
          </Link>

          {/* Custom badge with soft orange bg
          <span className="px-3 py-1 bg-[#FFA500]/90 text-white text-xs rounded-full font-medium shadow-sm">
            {category}
          </span> */}

          {/* Dynamic Badge */}
          <span
            className="px-3 py-1 text-white text-xs rounded-full font-medium shadow-sm"
            style={{ backgroundColor: badgeColor }}
          >
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
