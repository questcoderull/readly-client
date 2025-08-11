import React, { use } from "react";
import { Link, NavLink } from "react-router";
import {
  FaHome,
  FaPlus,
  FaBlog,
  FaStar,
  FaHeart,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../../assets/readly.png";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { playSoundAlert, playSoundSuccess } from "./soundEffect";
import { FaEnvelope, FaUser } from "react-icons/fa6";

const Navbar = () => {
  const { user, loading, logOutUser } = use(AuthContext);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to  logOut??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logOut",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            playSoundSuccess();
            toast.success("Logged out successfully");
          })
          .catch((error) => {
            playSoundAlert();
            Swal.fire({
              title: `${error.code}`,
              icon: "error",
              draggable: true,
            });
          });
      }
    });
  };
  return (
    <div className="sticky top-0 z-50 bg-white/30 backdrop-blur-md">
      <div className="navbar py-5 max-w-[1500px] px-4 mx-auto">
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
              <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-primary">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-[#003049] group-hover:text-white"
                    }`
                  }
                >
                  <FaHome className="text-current transition-colors duration-300 ease-in-out" />
                  <span>Home</span>
                </NavLink>
              </li>

              {user && (
                <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-primary">
                  <NavLink
                    to="/add-blog"
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-[#0077a3] group-hover:text-white"
                      }`
                    }
                  >
                    <FaPlus className="text-current transition-colors duration-300 ease-in-out" />
                    <span>Add Blog</span>
                  </NavLink>
                </li>
              )}

              <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-primary">
                <NavLink
                  to="/all-blogs"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-[#669BBC] group-hover:text-white"
                    }`
                  }
                >
                  <FaBlog className="text-current transition-colors duration-300 ease-in-out" />
                  <span>All Blogs</span>
                </NavLink>
              </li>

              <li className="group border rounded-md mb-1 transition-colors duration-300 ease-in-out hover:bg-primary">
                <NavLink
                  to="/featured-blogs"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-[#F77F00] group-hover:text-white"
                    }`
                  }
                >
                  <FaStar className="text-current transition-colors duration-300 ease-in-out" />
                  <span>Featured Blogs</span>
                </NavLink>
              </li>

              {user && (
                <li className="group border rounded-md transition-colors duration-300 ease-in-out hover:bg-primary">
                  <NavLink
                    to="/wishlist-page"
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-3 py-2 w-full rounded transition-colors duration-300 ease-in-out ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-[#D62828] group-hover:text-white"
                      }`
                    }
                  >
                    <FaHeart className="text-current transition-colors duration-300 ease-in-out" />
                    <span>Wishlist</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <div class="navbar-start">
            <Link to="/" class=" normal-case text-xl flex items-center">
              <img src={logo} alt="Readly logo" class="h-8 w-auto" />
              <span className="hidden md:block text-secondary text-3xl font-bold">
                eadly
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 p-2">
            <li className="group border rounded-md mr-3 hover:bg-primary transition-colors duration-300 ease-in-out flex items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-primary hover:text-white"
                  }`
                }
              >
                <FaHome className="mr-2 text-current transition-colors duration-300" />
                Home
              </NavLink>
            </li>

            {user && (
              <li className="group border rounded-md mr-3 hover:bg-primary transition-colors duration-300 ease-in-out flex items-center">
                <NavLink
                  to="/add-blog"
                  className={({ isActive }) =>
                    `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-secondary hover:text-white"
                    }`
                  }
                >
                  <FaPlus className="mr-2 text-current transition-colors duration-300" />
                  Add Blog
                </NavLink>
              </li>
            )}

            <li className="group border rounded-md mr-3 hover:bg-primary transition-colors duration-300 ease-in-out flex items-center">
              <NavLink
                to="/all-blogs"
                className={({ isActive }) =>
                  `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-[#14B8A6] hover:text-white"
                  }`
                }
              >
                <FaBlog className="mr-2 text-current transition-colors duration-300" />
                All Blogs
              </NavLink>
            </li>

            <li className="group border rounded-md mr-3 hover:bg-primary transition-colors duration-300 ease-in-out flex items-center">
              <NavLink
                to="/featured-blogs"
                className={({ isActive }) =>
                  `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-[#F77F00] hover:text-white"
                  }`
                }
              >
                <FaStar className="mr-2 text-current transition-colors duration-300" />
                Featured Blogs
              </NavLink>
            </li>

            {user && (
              <li className="group border rounded-md hover:bg-primary transition-colors duration-300 ease-in-out flex items-center">
                <NavLink
                  to="/wishlist-page"
                  className={({ isActive }) =>
                    `flex items-center w-full px-3 py-2 rounded transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-[#D62828] hover:text-white"
                    }`
                  }
                >
                  <FaHeart className="mr-2 text-current transition-colors duration-300" />
                  Wishlist
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {/* theme controller */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {loading ? (
            <span className="loading loading-spinner text-primary"></span>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-24 rounded-full">
                  {/* <img
                  alt="UserImage"
                  src={
                    user.photoURL ? user.photoURL : "https://ibb.co/VcGhBb0w"
                  }
                /> */}

                  {/* {user && user.photoURL ? (
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
                )} */}

                  {/* from gpt */}
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
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-accent text-lg font-bold uppercase cursor-default"
                      title={user?.displayName || "User"}
                    >
                      {user?.displayName?.charAt(0) || "U"}
                    </div>
                  )}
                </div>
              </div>
              {/* <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-3 shadow border border-blue-400"
              >
                <li className="mb-4">
                  <p className="justify-between">
                    {user.displayName ? user.displayName : "Your Name"}
                  </p>
                  <p>{user.email && user.email}</p>
                </li>
                <li>
                  <button onClick={handleSignOut} className="btn btn-secondary">
                    Logout
                  </button>
                </li>
              </ul> */}

              {/* plished version */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-60 p-4 shadow-lg border border-blue-400"
              >
                {/* User Info */}
                <li className="mb-4 border-b pb-3">
                  <p className="flex items-center gap-2 text-base font-semibold">
                    <FaUser className="text-primary" />
                    {user.displayName ? user.displayName : "Your Name"}
                  </p>
                  <p className="flex items-center gap-2 text-sm  mt-1">
                    <FaEnvelope className="text-primary" />
                    {user.email ? user.email : "your@email.com"}
                  </p>
                </li>

                {/* Action */}
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-primary btn-sm text-white flex items-center gap-2"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `btn border hidden  rounded-md transition md:flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-white"
                      : "border-[#219EBC] text-primary bg-white hover:bg-primary hover:text-white"
                  }`
                }
                // className="btn border hidden border-[#219EBC] text-primary bg-white hover:bg-primary hover:text-white rounded-md transition md:flex items-center gap-2"
              >
                <FaSignInAlt /> LogIn
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `btn border  ml-3 inline-flex items-center gap-2 md:px-4 px-2 py-1 text-sm ${
                    isActive
                      ? "bg-primary text-white"
                      : "border-secondary bg-secondary text-white hover:bg-primary hover:text-white"
                  }`
                }
                // className="btn border border-secondary bg-secondary text-white hover:bg-primary hover:text-white ml-3 inline-flex items-center gap-2 md:px-4 px-2 py-1 text-sm"
              >
                <FaUserPlus />
                <span className="hidden md:inline">SignUp</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
