import React from "react";
import Banner from "./Banner";
import Newsletter from "./NewsLetter";
import FeaturedBlogs from "../FeaturedBlogs";
import RecentBlogs from "./recentBlogs";

const Home = () => {
  return (
    <div>
      <div className="my-20">
        <Banner></Banner>
      </div>
      <RecentBlogs></RecentBlogs>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
