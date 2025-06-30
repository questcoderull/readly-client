import React, { use, useState } from "react";
import resterAnimation from "../../assets/register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../Shared/SocialLogin";
import { playSoundAlert, playSoundSuccess } from "../Shared/soundEffect";
import { Link, useLocation, useNavigate } from "react-router";

import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { createUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // console.log(name, email, photo, password);

    setErrorMessage("");

    // passwerd valideting
    const passwordRegEx =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

    if (!passwordRegEx.test(password)) {
      playSoundAlert();
      setErrorMessage(
        "Password must be at least 6 characters long, include one uppercase letter, one number, and one special character.(special charecter: # % $ @ ! atc)"
      );
      return;
    }

    // creating user

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        updateProfile(createdUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            playSoundSuccess();
            toast.success("Registerd successfully");
            // console.log(result);
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            playSoundAlert();

            Swal.fire({
              title: "Oops! something went wrong",
              icon: "error",
              draggable: true,
            });
            // console.log(error);
          });
      })
      .catch((error) => {
        playSoundAlert();
        let message = "";

        if (error.code === "auth/email-already-in-use") {
          message = "This email is already registered.";
        } else if (error.code === "auth/invalid-email") {
          message = "Please enter a valid email address.";
        } else if (error.code === "auth/weak-password") {
          message = "Password should be at least 6 characters and stronger.";
        } else {
          message = "Something went wrong. Please try again.";
        }

        Swal.fire({
          title: message,
          icon: "error",
          draggable: true,
        });
        // console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <Lottie animationData={resterAnimation} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full lg:w-11/12 shrink-0 shadow-lg flex-1">
          <div className="card-body py-10">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Name"
                required
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />

              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="PhotoURL"
              />

              {/* Password */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="input input-bordered flex items-center justify-between w-full px-3 py-2 gap-2">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  className="flex-grow bg-transparent outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-600 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* showing error message for password */}
              {errorMessage && (
                <h1 className="mt-4 border p-2 rounded text-red-700">
                  {errorMessage}
                </h1>
              )}

              <button className="btn btn-neutral mt-4">Register Now</button>
            </form>

            <SocialLogin></SocialLogin>

            <p className="mt-3">
              Already have an account?{" "}
              <Link className="text-blue-900 underline" to="/logIn">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
