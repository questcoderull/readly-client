import React from "react";
import { useLoaderData } from "react-router";

const BlogDetails = () => {
  const { title, photo, category, descriptionShort, descriptionLong } =
    useLoaderData();

  console.log(title, photo, category, descriptionLong, descriptionShort);
  return (
    <div>
      <h1>Blog details is here</h1>
    </div>
  );
};

export default BlogDetails;
