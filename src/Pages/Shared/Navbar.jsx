import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FaHome,
  FaPlus,
  FaBlog,
  FaStar,
  FaHeart,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import logo from "../../assets/readly.png";

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="navbar bg-transparent shadow-sm sticky top-0 z-50 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-[#023047]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "bg-[#023047] text-white"
                      : "text-[#003049] group-hover:text-white"
                  }`
                }
              >
                <FaHome className="text-current transition-colors duration-300 ease-in-out" />
                <span>Home</span>
              </NavLink>
            </li>

            <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-[#023047]">
              <NavLink
                to="/add-blog"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "bg-[#023047] text-white"
                      : "text-[#0077a3] group-hover:text-white"
                  }`
                }
              >
                <FaPlus className="text-current transition-colors duration-300 ease-in-out" />
                <span>Add Blog</span>
              </NavLink>
            </li>

            <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-[#023047]">
              <NavLink
                to="/all-blogs"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "bg-[#023047] text-white"
                      : "text-[#669BBC] group-hover:text-white"
                  }`
                }
              >
                <FaBlog className="text-current transition-colors duration-300 ease-in-out" />
                <span>All Blogs</span>
              </NavLink>
            </li>

            <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-[#023047]">
              <NavLink
                to="/featured-blogs"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "bg-[#023047] text-white"
                      : "text-[#F77F00] group-hover:text-white"
                  }`
                }
              >
                <FaStar className="text-current transition-colors duration-300 ease-in-out" />
                <span>Featured Blogs</span>
              </NavLink>
            </li>

            <li className="group border rounded-md transition-colors duration-300 ease-in-out hover:bg-[#023047]">
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "bg-[#023047] text-white"
                      : "text-[#D62828] group-hover:text-white"
                  }`
                }
              >
                <FaHeart className="text-current transition-colors duration-300 ease-in-out" />
                <span>Wishlist</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navbar-start">
          <Link to="/" class=" normal-case text-xl flex items-center">
            <img src={logo} alt="Readly logo" class="h-8 w-auto" />
            <span className="hidden md:block text-[#FB8500] text-3xl font-bold">
              eadly
            </span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 p-2">
          <li className="group border rounded-md mr-3 hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                  isActive
                    ? "bg-[#023047] text-white"
                    : "text-[#003049] hover:text-white"
                }`
              }
            >
              <FaHome className="mr-2 text-current transition-colors duration-300" />
              Home
            </NavLink>
          </li>

          <li className="group border rounded-md mr-3 hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/add-blog"
              className={({ isActive }) =>
                `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                  isActive
                    ? "bg-[#023047] text-white"
                    : "text-[#0077a3] hover:text-white"
                }`
              }
            >
              <FaPlus className="mr-2 text-current transition-colors duration-300" />
              Add Blog
            </NavLink>
          </li>

          <li className="group border rounded-md mr-3 hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/all-blogs"
              className={({ isActive }) =>
                `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                  isActive
                    ? "bg-[#023047] text-white"
                    : "text-[#669BBC] hover:text-white"
                }`
              }
            >
              <FaBlog className="mr-2 text-current transition-colors duration-300" />
              All Blogs
            </NavLink>
          </li>

          <li className="group border rounded-md mr-3 hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/featured-blogs"
              className={({ isActive }) =>
                `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                  isActive
                    ? "bg-[#023047] text-white"
                    : "text-[#F77F00] hover:text-white"
                }`
              }
            >
              <FaStar className="mr-2 text-current transition-colors duration-300" />
              Featured Blogs
            </NavLink>
          </li>

          <li className="group border rounded-md hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                  isActive
                    ? "bg-[#023047] text-white"
                    : "text-[#D62828] hover:text-white"
                }`
              }
            >
              <FaHeart className="mr-2 text-current transition-colors duration-300" />
              Wishlist
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <span className="loading loading-spinner text-primary"></span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {/* <img
                  alt="UserImage"
                  src={
                    user.photoURL ? user.photoURL : "https://ibb.co/VcGhBb0w"
                  }
                /> */}

                {user && user.photoURL ? (
                  <>
                    <img
                      data-tooltip-id="user-tooltip"
                      data-tooltip-content={user.displayName}
                      src={user.photoURL}
                      alt="User profile"
                      className="w-20 h-20 rounded-full object-cover cursor-pointer"
                    />
                    <Tooltip
                      id="user-tooltip"
                      place="bottom"
                      variant="info"
                      style={{ fontSize: "14px" }}
                    />
                  </>
                ) : (
                  <span>
                    {user?.displayName?.charAt(0).toUpperCase() || "U"}
                  </span>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-3 shadow border border-blue-400"
            >
              <li className="mb-4">
                <p className="justify-between">{user.displayName}</p>
              </li>
              <li>
                <button className="btn btn-neutral">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center">
            <NavLink
              to="/login"
              className="btn border hidden border-[#219EBC] text-[#023047] bg-white hover:bg-[#023047] hover:text-white rounded-md transition md:flex items-center gap-2"
            >
              <FaSignInAlt /> LogIn
            </NavLink>

            <NavLink
              to="/signup"
              className="btn border border-[#FB8500] bg-[#FB8500] text-white hover:bg-[#023047] hover:text-white ml-3 inline-flex items-center gap-2 md:px-4 px-2 py-1 text-sm"
            >
              <FaUserPlus />
              <span className="hidden md:inline">SignUp</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
