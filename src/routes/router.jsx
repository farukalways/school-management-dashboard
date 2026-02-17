import { createBrowserRouter } from "react-router";
import App from "../App";
import Students from "../dashboard/dashboardContent/page/students/Students";
import Home from "../dashboard/dashboardContent/page/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "students",
        element: <Students />,
      },
    ],
  },
]);
