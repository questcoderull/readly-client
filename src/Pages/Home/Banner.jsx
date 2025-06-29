import Lottie from "lottie-react";

// import animationDataTyping from "../../assets/typing.json";
// import animationDataBlogger from "../../assets/blogger.json";
import animationDataBlogger2 from "../../assets/hero2.json";
import {
  FaArrowRight,
  FaBookOpen,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Banner() {
  return (
    // <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-base-100 px-6 py-16 md:py-24 overflow-hidden my-10 rounded-2xl  ">
    //   {/* Text Content */}
    //   <motion.div
    //     initial={{ x: -80, opacity: 0 }}
    //     animate={{ x: 0, opacity: 1 }}
    //     transition={{ duration: 1 }}
    //     className="text-center md:text-left max-w-xl space-y-5"
    //   >
    //     <h1 className="text-3xl md:text-5xl font-bold text-[#023047] leading-tight drop-shadow-md">
    //       <TypeAnimation
    //         sequence={[
    //           "Write. Read. React.",
    //           2000,
    //           "Your gateway to stories that matter.",
    //           2500,
    //         ]}
    //         wrapper="span"
    //         speed={40}
    //         repeat={Infinity}
    //       />
    //     </h1>
    //     <p className="text-lg text-[#FB8500]">
    //       A modern blog platform built with simplicity, speed, and stunning
    //       design.
    //     </p>
    //     <motion.button
    //       whileHover={{ scale: 1.2 }}
    //       whileTap={{ scale: 1.3 }}
    //       className="inline-flex items-center gap-2 bg-[#FB8500] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#023047] transition"
    //     >
    //       Get Started <FaArrowRight />
    //     </motion.button>
    //   </motion.div>

    //   {/* Lottie Animation */}
    //   <motion.div
    //     initial={{ x: 200, opacity: 0 }}
    //     animate={{ x: 0, opacity: 1 }}
    //     transition={{ duration: 4 }}
    //     className="w-full md:w-1/2 max-w-md mb-10 md:mb-0"
    //   >
    //     <Lottie animationData={animationDataBlogger} loop={true} />
    //   </motion.div>
    // </div>

    <div className="relative overflow-hidden rounded-2xl my-10  bg-white">
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-300 rounded-full opacity-30 z-0"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-300 rounded-full opacity-30 z-0"></div>
      {/* Main Banner Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24">
        {/* Left Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-xl space-y-6"
        >
          {/* ✅ TypeAnimated Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#023047] leading-tight h-[58px]">
            <TypeAnimation
              sequence={[
                "Write. Read. React.",
                2000,
                "Explore Ideas That Matter.",
                2000,
                "Your Voice, Your Blog.",
                2000,
              ]}
              speed={40}
              wrapper="span"
              repeat={Infinity}
            />
          </h1>

          {/* Normal subtitle */}
          <p className="text-lg text-gray-700 mt-20">
            A platform for creators, readers, and thinkers.
          </p>

          {/* Feature icons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm font-medium">
            <span className="flex items-center gap-2 bg-[#035070] text-white px-3 py-1 rounded-full shadow-sm">
              <FaRocket /> Fast & Smooth
            </span>
            <span className="flex items-center gap-2 bg-[#6C63FF] text-white px-3 py-1 rounded-full shadow-sm">
              <FaLightbulb /> Creative Space
            </span>
            <span className="flex items-center gap-2 bg-[#219EBC] text-white px-3 py-1 rounded-full shadow-sm">
              <FaBookOpen /> Easy Writing
            </span>
          </div>

          {/* Button */}
          <Link to="/all-blogs">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              className="mt-6 inline-flex items-center gap-2 bg-[#FB8500] text-white px-6 py-3 rounded-full hover:bg-[#035070] transition cursor-pointer"
            >
              Get Started <FaRocket />
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Lottie Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full md:w-1/2 max-w-md mb-10 md:mb-0"
        >
          <Lottie animationData={animationDataBlogger2} loop />
        </motion.div>
      </div>
    </div>
  );
}
