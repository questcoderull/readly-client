import React from "react";
import Banner from "./Banner";
import Newsletter from "./NewsLetter";
import FeaturedBlogs from "../FeaturedBlogs";
import RecentBlogs from "./recentBlogs";
import { useLoaderData } from "react-router";
import MostDiscussedBlog from "./MostDiscussedBlog";

const Home = () => {
  const blogs = useLoaderData(); // all blogs
  return (
    <div>
      <div className="my-20">
        <Banner></Banner>
      </div>
      <RecentBlogs></RecentBlogs>
      <Newsletter></Newsletter>
      <MostDiscussedBlog blogs={blogs}></MostDiscussedBlog>
    </div>
  );
};

export default Home;
