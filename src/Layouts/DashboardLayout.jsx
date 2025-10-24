import React, { use } from "react";
import {
  FaHome,
  FaPlus,
  FaBlog,
  FaHeart,
  FaUser,
  FaEdit,
  FaListAlt,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const DashboardLayout = () => {
  const { user } = use(AuthContext);

  return (
    <div className="max-w-7xl mx-auto drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar for mobile */}
        <div className="navbar bg-warning border-b border-error w-full lg:hidden sticky top-0 z-10">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <h1 className="text-xl font-bold text-primary">Dashboard</h1>
          </div>
        </div>

        {/* Page content */}
        <div className="min-h-screen bg-info">
          <Outlet></Outlet>
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-warning text-base-content min-h-full w-80 p-4 space-y-2 border-r border-error">
          {/* Logo/Brand */}
          <div className="mb-5 pl-2">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold text-primary">R</div>
              <span className="text-2xl font-bold text-secondary">eadly</span>
            </div>
            <p className="text-sm text-primary/70 mt-1">Dashboard</p>
          </div>

          {/* User Info */}
          <div className="bg-success p-4 rounded-lg mb-4 border border-error">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-2 ring-offset-warning">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="Profile" />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center bg-primary text-info text-lg font-bold">
                      {user?.displayName?.charAt(0) || "U"}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="font-semibold text-primary truncate">
                  {user?.displayName || "User"}
                </h3>
                <p className="text-xs text-primary/70 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation Links */}
          <li className="hover:bg-primary rounded-md transition">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-primary text-info"
                    : "text-primary hover:text-info"
                }`
              }
            >
              <MdDashboard className="text-lg" />
              Dashboard Home
            </NavLink>
          </li>

          <li className="hover:bg-primary rounded-md transition">
            <NavLink
              to="/dashboard/my-blogs"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-primary text-info"
                    : "text-primary hover:text-info"
                }`
              }
            >
              <FaBlog className="text-lg" />
              My Blogs
            </NavLink>
          </li>

          <li className="hover:bg-primary rounded-md transition">
            <NavLink
              to="/dashboard/add-blog"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-primary text-info"
                    : "text-primary hover:text-info"
                }`
              }
            >
              <FaPlus className="text-lg" />
              Add New Blog
            </NavLink>
          </li>

          <li className="hover:bg-primary rounded-md transition">
            <NavLink
              to="/dashboard/my-wishlist"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-primary text-info"
                    : "text-primary hover:text-info"
                }`
              }
            >
              <FaHeart className="text-lg" />
              My Wishlist
            </NavLink>
          </li>

          <li className="hover:bg-primary rounded-md transition">
            <NavLink
              to="/dashboard/my-comments"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-primary text-info"
                    : "text-primary hover:text-info"
                }`
              }
            >
              <FaListAlt className="text-lg" />
              My Comments
            </NavLink>
          </li>

          <li className="hover:bg-primary rounded-md transition">
            <NavLink
              to="/dashboard/edit-profile"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-primary text-info"
                    : "text-primary hover:text-info"
                }`
              }
            >
              <FaEdit className="text-lg" />
              Edit Profile
            </NavLink>
          </li>

          <div className="divider"></div>

          {/* Back to Main Site */}
          <li className="hover:bg-secondary rounded-md transition">
            <NavLink
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-secondary hover:text-info"
            >
              <FaHome className="text-lg" />
              Back to Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
