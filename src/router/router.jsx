import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import SemothingWentWrong from "../Pages/ErrorPages/SemothingWentWrong";
import PageNOtFound from "../Pages/ErrorPages/PageNOtFound";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/signin/SignIn";
import AddBlog from "../Pages/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails";
import PrivateRoute from "../contexts/PrivabeteRoute";
import FeaturedBlogs from "../Pages/FeaturedBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <SemothingWentWrong></SemothingWentWrong>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/add-blog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/all-blogs",
        loader: () => fetch("http://localhost:3000/blogs"),
        Component: AllBlogs,
      },
      {
        path: "/featured-blogs",
        loader: () => fetch("http://localhost:3000/blogs"),
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/blog-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/logIn",
        Component: SignIn,
      },
    ],
  },
  {
    path: "/*",
    Component: PageNOtFound,
  },
]);

export default router;
