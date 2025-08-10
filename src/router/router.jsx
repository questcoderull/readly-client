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
import WishlistPage from "../Pages/Wishlist/WishListPage";
import UpdateBlog from "../Pages/UpdateBlog";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <SemothingWentWrong></SemothingWentWrong>,
    children: [
      {
        index: true,
        loader: () => fetch("https://readly-server.vercel.app/blogs"),
        Component: Home,
      },
      {
        path: "/add-blog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>,
          </PrivateRoute>
        ),
      },
      {
        path: "/update-blog/:id",
        loader: ({ params }) =>
          fetch(`https://readly-server.vercel.app/blogs/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>,
          </PrivateRoute>
        ),
      },
      {
        path: "/all-blogs",
        // loader: () => fetch("https://readly-server.vercel.app/blogs"),
        // eikhane mai skeleton dekacci,ei jonno useEffect diye data load kortesi.
        Component: AllBlogs,
      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/blog-details/:id",
        loader: ({ params }) =>
          fetch(`https://readly-server.vercel.app/blogs/${params.id}`),
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist-page",
        element: (
          <PrivateRoute>
            <WishlistPage></WishlistPage>
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
