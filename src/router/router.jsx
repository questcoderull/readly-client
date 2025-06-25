import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import SemothingWentWrong from "../Pages/ErrorPages/SemothingWentWrong";
import PageNOtFound from "../Pages/ErrorPages/PageNOtFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <SemothingWentWrong></SemothingWentWrong>,
  },
  {
    path: "/*",
    Component: PageNOtFound,
  },
]);

export default router;
