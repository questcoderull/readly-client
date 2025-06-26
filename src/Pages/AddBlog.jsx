import React from "react";

const AddBlog = () => {
  const handleAddBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const descriptionShort = form.descriptionShort.value;
    const descriptionLong = form.descriptionLong.value;

    console.log(title, photo, category, descriptionShort, descriptionLong);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-[#f0f9ff] rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-[#023047] mb-8 text-center">
        Add a New Blog Post
      </h2>

      <form onSubmit={handleAddBlog} className="space-y-6">
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="label font-semibold text-[#023047]">
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label font-semibold text-[#023047]">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label font-semibold text-[#023047]">
              Blog Category
            </label>
            <select
              defaultValue=""
              name="category"
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
              <option>Others</option>
            </select>
          </div>

          {/* Short Description */}
          <div>
            <label className="label font-semibold text-[#023047]">
              Short Description
            </label>
            <textarea
              name="descriptionShort"
              className="textarea textarea-bordered w-full"
              placeholder="Write a short summary"
              rows={3}
              required
            ></textarea>
          </div>

          {/* Long Description  */}
          <div className="md:col-span-2">
            <label className="label font-semibold text-[#023047]">
              Long Description
            </label>
            <textarea
              name="descriptionLong"
              className="textarea textarea-bordered w-full"
              placeholder="Write the full blog content"
              rows={6}
              required
            ></textarea>
          </div>
        </fieldset>

        <div className="text-center pt-4">
          <input
            type="submit"
            value="Add Blog"
            className="btn bg-[#023047] text-white hover:bg-[#035070] transition-all px-8"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
