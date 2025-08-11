import { use, useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import subscribe from "../../assets/subscribe.json";

import Swal from "sweetalert2";
import { playSoundAlert, playSoundSuccess } from "../Shared/soundEffect";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      playSoundAlert();
      return toast.error("Please enter your email.");
    }
    playSoundSuccess();
    // toast.success("Thank you for subscribing to our newsletter!");
    Swal.fire({
      title: "Thank you for subscribing to our newsletter!",
      icon: "success",
      draggable: true,
    });
    setEmail("");
  };

  return (
    <div className="bg-neutral py-10 px-4 md:px-16 rounded-lg shadow-md my-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* 📩 Animation on the LEFT */}
        <motion.div
          className="flex-1 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <Lottie animationData={subscribe} loop={true} />
        </motion.div>

        {/* 📝 Form on the RIGHT */}
        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Stay in the loop!
          </h2>
          <p className="text-white mb-6">
            Subscribe to get the latest blog updates, tech tips, and creative
            stories in your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-md"
            />
            <button type="submit" className="btn bg-secondary">
              <FaPaperPlane className="mr-2" />
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
