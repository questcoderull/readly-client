import React, { useEffect, use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";
import { FaEdit, FaEye } from "react-icons/fa";
import Loading from "../Shared/Loading";
import { categoryColors } from "../Shared/colors";
import useBlogStore from "../../stores/useBlogStore"; // Import Zustand store

const MyBlogs = () => {
  const { user } = use(AuthContext);

  // Use Zustand store instead of local state
  const { myBlogs, loading, fetchMyBlogs } = useBlogStore();

  useEffect(() => {
    const loadBlogs = async () => {
      if (user) {
        const token = await user.getIdToken();
        await fetchMyBlogs(user.email, token);
      }
    };
    loadBlogs();
  }, [user, fetchMyBlogs]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">My Blogs</h1>

      {myBlogs.length === 0 ? (
        <div className="card bg-warning shadow-xl border border-error p-12 text-center">
          <p className="text-primary/70 text-lg mb-4">
            You haven't written any blogs yet
          </p>
          <Link to="/dashboard/add-blog" className="btn btn-primary">
            Write Your First Blog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myBlogs.map((blog) => (
            <div
              key={blog._id}
              className="card bg-warning shadow-xl hover:shadow-2xl transition-all border border-error"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={blog.photo}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">{blog.title}</h2>
                <p className="text-primary/70 text-sm line-clamp-2">
                  {blog.descriptionShort}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className="badge text-white text-xs"
                    style={{
                      backgroundColor:
                        categoryColors[blog.category] || "#6B7280",
                    }}
                  >
                    {blog.category}
                  </span>
                  <span className="text-xs text-primary/60">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/blog-details/${blog._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    <FaEye /> View
                  </Link>
                  <Link
                    to={`/update-blog/${blog._id}`}
                    className="btn btn-sm btn-secondary"
                  >
                    <FaEdit /> Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
