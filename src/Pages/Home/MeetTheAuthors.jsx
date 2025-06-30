import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Fade } from "react-awesome-reveal";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineUsers } from "react-icons/hi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";

const MeetTheAuthors = () => {
  const [blogs, setBlogs] = useState([]);
  const [isGridView, setIsGridView] = useState(false);
  const [showGrid, setShowGrid] = useState(false); // for fade out effect

  useEffect(() => {
    fetch("https://readly-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const authorsMap = {};
  blogs.forEach((blog) => {
    const email = blog.authorEmail;
    if (!authorsMap[email]) {
      authorsMap[email] = {
        name: blog.authorName,
        photo: blog.authorPhoto,
        email,
        count: 1,
      };
    } else {
      authorsMap[email].count += 1;
    }
  });

  const authors = Object.values(authorsMap);

  // Handle toggle with delay (for fade-out)
  const handleToggle = () => {
    if (isGridView) {
      // fade-out grid first, then switch
      setShowGrid(false);
      setTimeout(() => {
        setIsGridView(false);
      }, 400); // time matches exit animation
    } else {
      setIsGridView(true);
      setShowGrid(true);
    }
  };

  return (
    // <div className="  bg-[#023047] rounded-lg px-4 md:px-8 py-16 mt-10 mb-20">
    //   {/* Header */}
    //   <h2 className="text-4xl font-bold text-white mb-10 text-center leading-snug">
    //     👨‍💻 Meet the Authors
    //   </h2>

    //   {/* View Area */}
    //   <div className="min-h-[300px] relative">
    //     <AnimatePresence mode="wait">
    //       {/* Grid View */}
    //       {isGridView && showGrid && (
    //         <motion.div
    //           key="grid"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           transition={{ duration: 0.4 }}
    //         >
    //           <Fade cascade damping={0.1} triggerOnce>
    //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    //               {authors.map((author, index) => (
    //                 <div
    //                   key={index}
    //                   className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#FB8500] text-center"
    //                 >
    //                   {author.photo ? (
    //                     <img
    //                       src={author.photo}
    //                       alt={author.name}
    //                       className="w-20 h-20 rounded-full mx-auto border-2 border-[#FB8500] object-cover"
    //                     />
    //                   ) : (
    //                     <div className="w-20 h-20 mx-auto rounded-full bg-[#FB8500] text-white flex items-center justify-center text-3xl font-bold">
    //                       {author.name?.charAt(0).toUpperCase()}
    //                     </div>
    //                   )}
    //                   <h3 className="text-xl font-semibold text-[#023047] mt-4">
    //                     {author.name}
    //                   </h3>
    //                   <p className="text-sm text-gray-500 mt-1">
    //                     {author.email}
    //                   </p>
    //                   <p className="text-sm text-[#FB8500] font-medium mt-2">
    //                     ✍️ {author.count} blog{author.count > 1 ? "s" : ""}
    //                   </p>
    //                 </div>
    //               ))}
    //             </div>
    //           </Fade>
    //         </motion.div>
    //       )}

    //       {/* Marquee View */}
    //       {!isGridView && (
    //         <motion.div
    //           key="marquee"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           transition={{ duration: 0.4 }}
    //         >
    //           <Marquee
    //             pauseOnHover
    //             pauseOnClick
    //             speed={50}
    //             gradient={false}
    //             direction="left"
    //           >
    //             <div className="flex gap-6">
    //               {authors.map((author, index) => (
    //                 <div
    //                   key={index}
    //                   className="min-w-[240px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#FB8500] text-center"
    //                 >
    //                   {author.photo ? (
    //                     <img
    //                       src={author.photo}
    //                       alt={author.name}
    //                       className="w-16 h-16 rounded-full mx-auto border-2 border-[#FB8500] object-cover"
    //                     />
    //                   ) : (
    //                     <div className="w-16 h-16 mx-auto rounded-full bg-[#FB8500] text-white flex items-center justify-center text-2xl font-bold">
    //                       {author.name?.charAt(0).toUpperCase()}
    //                     </div>
    //                   )}
    //                   <h3 className="text-lg font-semibold text-[#023047] mt-3">
    //                     {author.name}
    //                   </h3>
    //                   <p className="text-sm text-gray-500">{author.email}</p>
    //                   <p className="text-sm text-[#FB8500] font-medium mt-1">
    //                     ✍️ {author.count} blog{author.count > 1 ? "s" : ""}
    //                   </p>
    //                 </div>
    //               ))}
    //             </div>
    //           </Marquee>
    //         </motion.div>
    //       )}
    //     </AnimatePresence>

    //     {/* Toggle Button */}
    //     <div className="text-center mt-12">
    //       <button
    //         onClick={handleToggle}
    //         className="inline-block px-6 py-2.5 text-sm font-medium bg-[#FB8500] text-white rounded-full hover:bg-[#ff9f3b] transition-all duration-300 shadow-md hover:shadow-lg"
    //       >
    //         {isGridView ? "🔙 View Less" : "🔎 View All"}
    //       </button>
    //     </div>
    //   </div>
    // </div>

    //plished
    <div className="bg-[#023047] rounded-lg px-4 md:px-8 py-16 mt-10 mb-20">
      {/* Header */}
      <h2 className="text-4xl font-bold text-white mb-10 text-center flex items-center justify-center gap-2 leading-snug">
        <HiOutlineUsers className="text-white text-4xl" />
        Meet the Authors
      </h2>

      {/* View Area */}
      <div className="min-h-[300px] relative">
        <AnimatePresence mode="wait">
          {/* Grid View */}
          {isGridView && showGrid && (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {authors.map((author, index) => (
                  <Fade
                    key={index}
                    direction="up"
                    duration={500}
                    triggerOnce
                    cascade
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#FB8500] text-center">
                      {author.photo ? (
                        <img
                          src={author.photo}
                          alt={author.name}
                          className="w-20 h-20 rounded-full mx-auto border-2 border-[#FB8500] object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 mx-auto rounded-full bg-[#FB8500] text-white flex items-center justify-center text-3xl font-bold">
                          {author.name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-[#023047] mt-4">
                        {author.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {author.email}
                      </p>
                      <p className="text-sm text-[#023047] font-medium mt-2 flex items-center justify-center gap-1">
                        <FaPenNib className="text-[#FB8500] text-sm" />
                        {author.count} blog{author.count > 1 ? "s" : ""}
                      </p>
                    </div>
                  </Fade>
                ))}
              </div>
            </motion.div>
          )}

          {/* Marquee View */}
          {!isGridView && (
            <motion.div
              key="marquee"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Marquee
                pauseOnHover
                pauseOnClick
                speed={50}
                gradient={false}
                direction="left"
              >
                <div className="flex gap-6">
                  {authors.map((author, index) => (
                    <div
                      key={index}
                      className="min-w-[240px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#FB8500] text-center"
                    >
                      {author.photo ? (
                        <img
                          src={author.photo}
                          alt={author.name}
                          className="w-16 h-16 rounded-full mx-auto border-2 border-[#FB8500] object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 mx-auto rounded-full bg-[#FB8500] text-white flex items-center justify-center text-2xl font-bold">
                          {author.name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-[#023047] mt-3">
                        {author.name}
                      </h3>
                      <p className="text-sm text-gray-500">{author.email}</p>
                      <p className="text-sm text-[#FB8500] font-medium mt-1">
                        ✍️ {author.count} blog{author.count > 1 ? "s" : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </Marquee>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleToggle}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-[#FB8500] text-white rounded-full hover:bg-[#ff9f3b] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            {isGridView ? (
              <>
                <MdExpandLess className="text-lg" /> View Less
              </>
            ) : (
              <>
                <MdExpandMore className="text-lg" /> View All
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetTheAuthors;
