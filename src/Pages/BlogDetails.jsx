import React, { use, useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { categoryColors } from "./Shared/colors";
import axios from "axios";
import toast from "react-hot-toast";
import { playSoundAlert, playSoundSuccess } from "./Shared/soundEffect";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const { user } = use(AuthContext);
  const {
    _id,
    title,
    photo,
    category,
    descriptionShort,
    descriptionLong,
    authorName,
    authorEmail,
  } = useLoaderData();

  const [comment, setComment] = useState([]);

  const badgeColor = categoryColors[category] || "#6B7280";

  const handleAddComment = (e) => {
    e.preventDefault();
    const blogId = _id;
    const userName = user.displayName;
    const userPhoto = user.photoURL;
    const comment = e.target.comment.value;

    if (authorEmail === user?.email) {
      playSoundAlert();
      return Swal.fire({
        title: "You can't comment on your own blog",
        icon: "error",
        draggable: true,
      });
    }

    const commentInfo = {
      blogId,
      userName,
      userPhoto,
      comment,
      createdAt: new Date(),
    };

    // console.log(commentInfo);

    axios
      .post("http://localhost:3000/comments", commentInfo)
      .then((res) => {
        // console.log(res.data);
        e.target.reset();
        setComment((prev) => [...prev, commentInfo]);
        playSoundSuccess();
        toast.success("Your Comment added", {
          duration: 4000,
        });
      })
      .catch((error) => {
        playSoundAlert();
        Swal.fire({
          title: "OOps! couldn't your comment, smoehtis went wrong!",
          icon: "error",
          draggable: true,
        });
        // console.log(error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filteredComment = data.filter(
          (comment) => comment.blogId === _id
        );

        setComment(filteredComment);
      });
  }, [_id]);

  return (
    <div className="bg-blue-50 py-10 px-4 my-10 rounded-xl">
      {/* Blog Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:shadow-lg">
        {/* Image */}
        <img
          className="w-full h-[300px] object-cover"
          src={photo}
          alt={title}
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Category Badge */}
          <span
            className="inline-block px-3 py-1 text-white text-xs rounded-full font-medium shadow-sm"
            style={{ backgroundColor: badgeColor }}
          >
            {category}
          </span>

          {/* Title */}
          <h2 className="text-3xl font-bold text-[#1D3557]">{title}</h2>

          {/* Posted By Section */}
          <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-1">
            <p className="font-semibold">Posted by:</p>
            <p>
              <span className="font-medium">Name:</span> {authorName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {authorEmail}
            </p>
          </div>

          {/* Short Description */}
          <p className="text-gray-600 text-base">{descriptionShort}</p>

          {/* Long Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            {descriptionLong}
          </p>
        </div>
      </div>

      {/* Comment Section */}
      <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-bold text-[#1D3557]">Comments</h3>

        {/* Comment Form */}
        {user ? (
          <form onSubmit={handleAddComment} className="space-y-2">
            <textarea
              placeholder="Write your comment..."
              className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
              name="comment"
              required
            />
            <button
              type="submit"
              className="bg-[#1D3557] text-white px-4 py-2 rounded hover:bg-[#163456] transition"
            >
              Post Comment
            </button>
          </form>
        ) : (
          <p className="text-sm text-gray-600 italic">
            Please log in to post a comment.
          </p>
        )}

        {/* Comment List */}
        <div className="space-y-3 pt-2">
          {comment.map((com) => (
            <div
              key={com._id}
              com={com}
              className="bg-blue-50 p-3 flex gap-2 rounded-md border border-blue-100"
            >
              <div className="avatar">
                <div className="w-10 h-10 rounded-full">
                  <img src={com.userPhoto} />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1D3557]">
                  {com.userName}
                  <span className="text-xs ml-2 text-gray-500">
                    {new Date(com.createdAt).toLocaleString()}
                  </span>
                </p>
                <p className="text-sm text-gray-700 mt-1">{com.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 text-center space-x-4 space-y-2">
        <Link to="/" className="btn bg-[#1D3557] text-white">
          <span className="hidden md:block">Back To Home</span>
          <span className="block md:hidden">Home</span>
        </Link>
        <Link to="/all-blogs" className="btn bg-[#FB8500] text-white">
          <span className="hidden md:block">All Blogs</span>
          <span className="block md:hidden">Blogs</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
