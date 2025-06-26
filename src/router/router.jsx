import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import SemothingWentWrong from "../Pages/ErrorPages/SemothingWentWrong";
import PageNOtFound from "../Pages/ErrorPages/PageNOtFound";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

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
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: PageNOtFound,
  },
]);

export default router;
