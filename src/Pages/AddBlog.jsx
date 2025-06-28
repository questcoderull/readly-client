import React, { use } from "react";
import Lottie from "lottie-react";
import blogAnimation from "../assets/formAdd.json";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { playSoundAlert, playSoundSuccess } from "./Shared/soundEffect";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddBlog = () => {
  const { user } = use(AuthContext);

  const handleAddBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const descriptionShort = form.descriptionShort.value;
    const descriptionLong = form.descriptionLong.value;
    const authorName = user.displayName;
    const authorEmail = user.email;

    const blogInfo = {
      title,
      photo,
      category,
      descriptionShort,
      descriptionLong,
      authorName,
      authorEmail,
    };

    console.log(blogInfo);

    // sending to db

    axios
      .post("http://localhost:3000/blogs", blogInfo)
      .then((res) => {
        playSoundSuccess();

        toast.success("Your Blog added successfully", {
          duration: 4000,
        });
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        playSoundAlert();
        Swal.fire({
          title: "OOps! couldn't your blog, smoehting went wrong!",
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    //polished
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <h2 className="text-3xl font-bold text-[#023047] mb-8 text-center">
        📝 Add a New Blog Post
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
        {/* Lottie Animation */}
        <div>
          <Lottie animationData={blogAnimation} loop={true} />
        </div>

        {/* Blog Form */}
        <div className="bg-white  rounded-2xl p-6 md:p-10 shadow-md border border-gray-200 w-full">
          <h2 className="text-3xl font-bold text-[#023047] mb-8 text-center">
            Add blog
          </h2>

          <form onSubmit={handleAddBlog} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Blog Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., How AI is Changing the World"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Paste image URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Blog Category
                </label>
                <select
                  name="category"
                  defaultValue=""
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
              </div>

              {/* Short Description */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Short Description
                </label>
                <textarea
                  name="descriptionShort"
                  placeholder="Write a short summary"
                  rows={3}
                  className="textarea textarea-bordered w-full"
                  required
                ></textarea>
              </div>

              {/* Long Description */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Long Description
                </label>
                <textarea
                  name="descriptionLong"
                  placeholder="Write the full blog content"
                  rows={6}
                  className="textarea textarea-bordered w-full"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <input
                type="submit"
                value="➕ Add Blog"
                className="btn bg-[#023047] hover:bg-[#035070] text-white px-8 rounded-full shadow transition-all"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Lottie for mobile/tab view */}
      {/* <div className="md:hidden mt-8">
        <Lottie animationData={blogAnimation} loop={true} />
      </div> */}
    </div>
  );
};

export default AddBlog;
