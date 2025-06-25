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
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 ">
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
                className="flex items-center space-x-2 px-3 py-2 text-[#003049] group-hover:text-white transition-colors duration-300 ease-in-out w-full"
              >
                <FaHome className="text-[#003049] group-hover:text-white transition-colors duration-300 ease-in-out" />
                <span>Home</span>
              </NavLink>
            </li>

            <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-[#023047]">
              <NavLink
                to="/"
                className="flex items-center space-x-2 px-3 py-2 text-[#0077a3] group-hover:text-white transition-colors duration-300 ease-in-out w-full"
              >
                <FaPlus className="text-[#0077a3] group-hover:text-white transition-colors duration-300 ease-in-out" />
                <span>Add Blog</span>
              </NavLink>
            </li>

            <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-[#023047]">
              <NavLink
                to="/"
                className="flex items-center space-x-2 px-3 py-2 text-[#669BBC] group-hover:text-white transition-colors duration-300 ease-in-out w-full"
              >
                <FaBlog className="text-[#669BBC] group-hover:text-white transition-colors duration-300 ease-in-out" />
                <span>All Blogs</span>
              </NavLink>
            </li>

            <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-[#023047]">
              <NavLink
                to="/"
                className="flex items-center space-x-2 px-3 py-2 text-[#F77F00] group-hover:text-white transition-colors duration-300 ease-in-out w-full"
              >
                <FaStar className="text-[#F77F00] group-hover:text-white transition-colors duration-300 ease-in-out" />
                <span>Featured Blogs</span>
              </NavLink>
            </li>

            <li className="group border rounded-md transition-colors duration-300 ease-in-out hover:bg-[#023047]">
              <NavLink
                to="/"
                className="flex items-center space-x-2 px-3 py-2 text-[#D62828] group-hover:text-white transition-colors duration-300 ease-in-out w-full"
              >
                <FaHeart className="text-[#D62828] group-hover:text-white transition-colors duration-300 ease-in-out" />
                <span>Wishlist</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navbar-start">
          <Link
            to="/"
            class="btn btn-ghost normal-case text-xl flex items-center gap-2"
          >
            <img src={logo} alt="Readly logo" class="h-8 w-auto" />
            <span className="hidden md:block">Readly</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 p-2">
          <li className="group border rounded-md mr-3 hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/"
              className="flex items-center w-full text-[#003049] group-hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaHome className="mr-2 text-[#003049] group-hover:text-white transition-colors duration-300 ease-in-out" />
              Home
            </NavLink>
          </li>
          <li className="group border rounded-md mr-3 hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/"
              className="flex items-center w-full text-[#0077a3] group-hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaPlus className="mr-2 text-[#0077a3] group-hover:text-white transition-colors duration-300 ease-in-out" />
              Add Blog
            </NavLink>
          </li>
          <li className="group border rounded-md mr-3 hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/"
              className="flex items-center w-full text-[#669BBC] group-hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaBlog className="mr-2 text-[#669BBC] group-hover:text-white transition-colors duration-300 ease-in-out" />
              All Blogs
            </NavLink>
          </li>
          <li className="group border rounded-md mr-3 hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/"
              className="flex items-center w-full text-[#F77F00] group-hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaStar className="mr-2 text-[#F77F00] group-hover:text-white transition-colors duration-300 ease-in-out" />
              Featured Blogs
            </NavLink>
          </li>
          <li className="group border rounded-md hover:bg-[#023047] transition-colors duration-300 ease-in-out flex items-center">
            <NavLink
              to="/"
              className="flex items-center w-full text-[#D62828] group-hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaHeart className="mr-2 text-[#D62828] group-hover:text-white transition-colors duration-300 ease-in-out" />
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
              className="btn border hidden border-[#219EBC] text-[#023047] bg-white hover:bg-[#8ECAE6] hover:text-black rounded-md transition md:flex items-center gap-2"
            >
              <FaSignInAlt /> LogIn
            </NavLink>

            <NavLink
              to="/signup"
              className="btn border border-[#FB8500] bg-[#FB8500] text-white hover:bg-[#FFB703] ml-3 inline-flex items-center gap-2 md:px-4 px-2 py-1 text-sm"
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
