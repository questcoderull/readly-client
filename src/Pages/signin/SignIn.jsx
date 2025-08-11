import React, { use, useState } from "react";
import loginAnimation from "../../assets/SignIn.json";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../Shared/SocialLogin";
import { playSoundAlert, playSoundSuccess } from "../Shared/soundEffect";
import { Link, useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { logInUser } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, photo, password);

    // Signng in user

    logInUser(email, password)
      .then((result) => {
        playSoundSuccess();
        toast.success("LoggedIn successfully");
        // console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        playSoundAlert();
        let message = "";

        if (error.code === "auth/user-not-found") {
          message = "No user found with this email. Please register first.";
        } else if (error.code === "auth/wrong-password") {
          message = "Incorrect password. Please try again.";
        } else if (error.code === "auth/invalid-email") {
          message = "Please enter a valid email address.";
        } else if (error.code === "auth/too-many-requests") {
          message =
            "Too many unsuccessful login attempts. Please try again later.";
        } else {
          message = "Something went wrong. Please try again.";
        }

        Swal.fire({
          title: message,
          icon: "error",
          draggable: true,
        });
        // console.log(error.message);
        // console.log(error.code);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <Lottie animationData={loginAnimation} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full lg:w-11/12 shrink-0 shadow-lg flex-1">
          <div className="card-body py-10">
            <h1 className="text-5xl font-bold">Log In now!</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />

              {/* Password */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="input input-bordered flex items-center justify-between w-full px-3 py-2 gap-2">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="flex-grow bg-transparent outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-primary cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button className="btn btn-primary mt-4">Log In Now</button>
            </form>

            <SocialLogin></SocialLogin>

            <p className="mt-3">
              Don't have an account?{" "}
              <Link className="text-primary underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
