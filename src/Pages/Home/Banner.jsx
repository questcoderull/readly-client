import Lottie from "lottie-react";
// import animationDataTyping from "../../assets/typing.json";
import animationDataBlogger from "../../assets/blogger.json";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-base-100 px-6 py-16 md:py-24 overflow-hidden my-10 rounded-2xl  ">
      {/* Text Content */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-xl space-y-5"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#023047] leading-tight drop-shadow-md">
          <TypeAnimation
            sequence={[
              "Write. Read. React.",
              2000,
              "Your gateway to stories that matter.",
              2500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>
        <p className="text-lg text-[#FB8500]">
          A modern blog platform built with simplicity, speed, and stunning
          design.
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.3 }}
          className="inline-flex items-center gap-2 bg-[#FB8500] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#023047] transition"
        >
          Get Started <FaArrowRight />
        </motion.button>
      </motion.div>

      {/* Lottie Animation */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 4 }}
        className="w-full md:w-1/2 max-w-md mb-10 md:mb-0"
      >
        <Lottie animationData={animationDataBlogger} loop={true} />
      </motion.div>
    </div>
  );
}
