import React, { use } from "react";
import resterAnimation from "../../assets/register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { createUser, loading } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // console.log(name, email, photo, password);

    // creating user

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <Lottie animationData={resterAnimation} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full lg:w-11/12 shrink-0 shadow-2xl flex-1">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Name"
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />

              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="PhotoURL"
              />

              {/* Password field */}
              <label className="label">Password</label>
              <input
                name="password"
                type="text"
                className="input w-full"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Register Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
