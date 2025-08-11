import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import blogAnimation from "../assets/formUpdate.json";
import Lottie from "lottie-react";
import { FaPen } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import axios from "axios";
import { playSoundAlert, playSoundSuccess } from "./Shared/soundEffect";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const { _id, title, photo, category, descriptionShort, descriptionLong } =
    useLoaderData();

  const navigete = useNavigate();

  const handleUpdateBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const descriptionShort = form.descriptionShort.value;
    const descriptionLong = form.descriptionLong.value;

    const blogInfo = {
      title,
      photo,
      category,
      descriptionShort,
      descriptionLong,
    };

    // console.log(blogInfo);

    axios
      .put(`https://readly-server.vercel.app/blogs/${_id}`, blogInfo)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount) {
          playSoundSuccess();
          toast.success("your blog updated succesfully", {
            duration: 4000,
          });
          navigete("/all-blogs");
        }
      })
      .catch((error) => {
        // console.log(error);
        playSoundAlert();
        Swal.fire({
          title: "OOps! couldn't update your blog, smoehting went wrong!",
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12  rounded-2xl shadow-md my-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
        {/* Lottie Animation */}
        <div className="hidden md:block w-full max-w-md mx-auto">
          <Lottie animationData={blogAnimation} loop={true} />
        </div>

        {/* Blog Form */}
        <div className=" rounded-2xl p-6 md:p-10 shadow-md border border-gray-200 w-full">
          <div className="text-center mb-6 space-y-2">
            <h2 className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
              <FaPen /> Update your Blog Post
            </h2>
            <p className="text-primary text-base">Make changes that matter.</p>
          </div>

          <form onSubmit={handleUpdateBlog} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <fieldset className=" p-4 rounded-xl border border-[#90CAF9] shadow-sm">
                <label className="block text-sm font-semibold text-primary mb-1">
                  Blog Title
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  placeholder="e.g., How AI is changing everything"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              {/* Photo URL */}
              <fieldset className=" p-4 rounded-xl border border-[#90CAF9] shadow-sm">
                <label className="block text-sm font-semibold text-primary mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Paste your blog image URL"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              {/* Category */}
              <fieldset className=" p-4 rounded-xl border border-[#90CAF9] shadow-sm">
                <label className="block text-sm font-semibold text-primary mb-1">
                  Blog Category
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option>Technology</option>
                  <option>Travel</option>
                  <option>Finance</option>
                  <option>Education</option>
                  <option>Marketing</option>
                  <option>Health</option>
                  <option>Productivity</option>
                  <option>Career</option>
                  <option>Others</option>
                </select>
              </fieldset>

              {/* Short Description */}
              <fieldset className=" p-4 rounded-xl border border-[#90CAF9] shadow-sm">
                <label className="block text-sm font-semibold text-primary mb-1">
                  Short Description
                </label>
                <textarea
                  name="descriptionShort"
                  defaultValue={descriptionShort}
                  placeholder="Write a short summary"
                  rows={3}
                  className="textarea textarea-bordered w-full"
                  required
                ></textarea>
              </fieldset>
            </div>

            {/* Long Description */}
            <fieldset className=" p-4 rounded-xl border border-[#90CAF9] shadow-sm">
              <label className="block text-sm font-semibold text-primary mb-1">
                Full Blog Content
              </label>
              <textarea
                name="descriptionLong"
                defaultValue={descriptionLong}
                placeholder="Write your full blog content here..."
                rows={6}
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </fieldset>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-primary hover:bg-[#035070] text-white w-full mt-6 rounded-lg text-lg flex items-center justify-center gap-2"
            >
              <MdUpdate /> update Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
