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
    authorPhoto,
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
      .post("https://readly-server.vercel.app/comments", commentInfo)
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
          title: "OOps! couldn't your comment, smoehtig went wrong!",
          icon: "error",
          draggable: true,
        });
        // console.log(error);
      });
  };

  useEffect(() => {
    fetch("https://readly-server.vercel.app/comments")
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
    <div className=" py-10 px-4 my-10 rounded-xl">
      {/* Blog Card */}
      <div className="max-w-4xl mx-auto bg-warning border border-error shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:shadow-lg">
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
          <h2 className="text-3xl font-bold text-primary">{title}</h2>

          {/* Posted By Section */}
          <div className="mt-6 border-t pt-4 text-sm  space-y-1">
            <p className="font-semibold">Posted by:</p>

            <div className="flex items-center gap-3">
              {authorPhoto && (
                <img
                  src={authorPhoto}
                  alt={authorName}
                  className="w-10 h-10 rounded-full border"
                />
              )}
              <div>
                <p>
                  <span className="font-medium">Name:</span> {authorName}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {authorEmail}
                </p>
              </div>
            </div>
          </div>

          {/* Short Description */}
          <p className=" text-base">{descriptionShort}</p>

          {/* Long Description */}
          <p className=" text-sm leading-relaxed">{descriptionLong}</p>

          {/* update button */}
          <div className="text-end">
            {authorEmail === user?.email && (
              <Link
                to={`/update-blog/${_id}`}
                className="btn bg-primary text-white  mt-3"
              >
                Update
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="max-w-4xl mx-auto mt-10 border border-error p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-bold text-primary">Comments</h3>

        {/* Comment Form */}
        {user ? (
          <form onSubmit={handleAddComment} className="space-y-2">
            <textarea
              placeholder="Write your comment..."
              className="w-full border border-error rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
              name="comment"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-[#163456] transition cursor-pointer"
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
              className="bg-success  p-3 flex gap-2 rounded-md border  border-error"
            >
              <div className="avatar">
                <div className="w-10 h-10 rounded-full">
                  <img src={com.userPhoto} />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">
                  {com.userName}
                  <span className="text-xs ml-2 text-gray-500">
                    {new Date(com.createdAt).toLocaleString()}
                  </span>
                </p>
                <p className="text-sm  mt-1">{com.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 text-center space-x-4 space-y-2">
        <Link to="/" className="btn bg-primary text-white">
          <span className="hidden md:block">Back To Home</span>
          <span className="block md:hidden">Home</span>
        </Link>
        <Link to="/all-blogs" className="btn bg-secondary text-white">
          <span className="hidden md:block">All Blogs</span>
          <span className="block md:hidden">Blogs</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
