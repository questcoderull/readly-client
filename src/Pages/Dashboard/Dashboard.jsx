import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";
import {
  FaBlog,
  FaHeart,
  FaComment,
  FaPlus,
  FaEye,
  FaStar,
} from "react-icons/fa";
import axios from "axios";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const { user } = use(AuthContext);
  const [stats, setStats] = useState({
    totalBlogs: 0,
    wishlistCount: 0,
    totalComments: 0,
  });
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const token = await user.getIdToken();

        // Fetch user's blogs using new backend route
        const blogsRes = await axios.get(
          `https://readly-server.vercel.app/my-blogs?email=${user?.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userBlogs = blogsRes.data;

        // Fetch wishlist
        const wishlistRes = await axios.get(
          `https://readly-server.vercel.app/wishlist?email=${user?.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Fetch user's comments using new backend route
        const commentsRes = await axios.get(
          `https://readly-server.vercel.app/my-comments?email=${user?.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userComments = commentsRes.data;

        setStats({
          totalBlogs: userBlogs.length,
          wishlistCount: wishlistRes.data.length,
          totalComments: userComments.length,
        });

        // Set recent 5 blogs
        setRecentBlogs(userBlogs.slice(0, 5));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-info py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Welcome back, {user?.displayName || "User"}! 👋
          </h1>
          <p className="text-primary/70">
            Here's what's happening with your blog today
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Blogs */}
          <div className="card bg-primary text-info shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-error">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-info/80 text-sm font-medium">
                    Total Blogs
                  </p>
                  <h2 className="text-4xl font-bold mt-2">
                    {stats.totalBlogs}
                  </h2>
                </div>
                <div className="bg-info/20 p-4 rounded-full">
                  <FaBlog className="text-4xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Wishlist */}
          <div className="card bg-secondary text-info shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-error">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-info/80 text-sm font-medium">
                    Wishlist Items
                  </p>
                  <h2 className="text-4xl font-bold mt-2">
                    {stats.wishlistCount}
                  </h2>
                </div>
                <div className="bg-info/20 p-4 rounded-full">
                  <FaHeart className="text-4xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="card bg-accent text-info shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-error">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-info/80 text-sm font-medium">
                    Your Comments
                  </p>
                  <h2 className="text-4xl font-bold mt-2">
                    {stats.totalComments}
                  </h2>
                </div>
                <div className="bg-info/20 p-4 rounded-full">
                  <FaComment className="text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Blogs Section */}
          <div className="lg:col-span-2">
            <div className="card bg-warning shadow-xl border border-error">
              <div className="card-body">
                <h2 className="card-title text-2xl text-primary mb-4">
                  Your Recent Blogs
                </h2>
                <div className="space-y-4">
                  {recentBlogs.length > 0 ? (
                    recentBlogs.map((blog) => (
                      <div
                        key={blog._id}
                        className="flex items-center justify-between p-4 bg-success rounded-lg hover:bg-success/80 transition-colors border border-error"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-1">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-primary/70">
                            {blog.category} •{" "}
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={`/blog-details/${blog._id}`}
                            className="btn btn-sm btn-primary"
                          >
                            <FaEye />
                          </Link>
                          <Link
                            to={`/update-blog/${blog._id}`}
                            className="btn btn-sm btn-secondary"
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <FaBlog className="text-6xl text-primary/30 mx-auto mb-4" />
                      <p className="text-primary/70 mb-4">
                        You haven't written any blogs yet
                      </p>
                      <Link to="/add-blog" className="btn btn-primary">
                        <FaPlus /> Write Your First Blog
                      </Link>
                    </div>
                  )}
                </div>

                {recentBlogs.length > 0 && (
                  <div className="card-actions justify-end mt-4">
                    <Link to="/all-blogs" className="btn btn-outline btn-sm">
                      View All Blogs →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions & Profile */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="card bg-primary text-info shadow-xl border border-error">
              <div className="card-body items-center text-center">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full ring ring-secondary ring-offset-2 ring-offset-warning">
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt="Profile" />
                    ) : (
                      <div className="w-24 h-24 flex items-center justify-center bg-info text-primary text-3xl font-bold">
                        {user?.displayName?.charAt(0) || "U"}
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="card-title text-xl">
                  {user?.displayName || "User"}
                </h3>
                <p className="text-info/80 text-sm">{user?.email}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card bg-warning shadow-xl border border-error">
              <div className="card-body">
                <h2 className="card-title text-xl text-primary mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <Link
                    to="/add-blog"
                    className="btn btn-primary w-full justify-start"
                  >
                    <FaPlus /> Create New Blog
                  </Link>
                  <Link
                    to="/wishlist-page"
                    className="btn btn-secondary w-full justify-start"
                  >
                    <FaHeart /> View Wishlist
                  </Link>
                  <Link
                    to="/featured-blogs"
                    className="btn btn-accent w-full justify-start"
                  >
                    <FaStar /> Featured Blogs
                  </Link>
                  <Link
                    to="/all-blogs"
                    className="btn btn-outline w-full justify-start"
                  >
                    <FaBlog /> Browse All Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
