import React, { use } from "react";
import loginAnimation from "../../assets/SignIn.json";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const SignIn = () => {
  const { logInUser, loading, playSoundSuccess, playSoundAlert } =
    use(AuthContext);

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
        console.log(result);
      })
      .catch((error) => {
        playSoundAlert();
        Swal.fire({
          title: `${error.code}`,
          icon: "error",
          draggable: true,
        });
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <Lottie animationData={loginAnimation} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full lg:w-11/12 shrink-0 shadow-lg flex-1">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Log In now!</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />

              {/* Password field */}
              <label className="label">Password</label>
              <input
                name="password"
                type="text"
                className="input w-full"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Log In Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
