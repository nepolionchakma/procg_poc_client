import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Alerts from "./Pages/Alerts";
import Task from "./Pages/Task";
import Notification from "./Pages/Notification";
import Home from "./Pages/Home";
import Risk_Management from "./Pages/Risk_Management";
import Control_Management from "./Pages/Control_Management";
import Issue_Management from "./Pages/Issue_Management";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alerts",
        element: <Alerts />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/risk-management",
        element: <Risk_Management />,
      },
      {
        path: "/control-management",
        element: <Control_Management />,
      },
      {
        path: "/issue-management",
        element: <Issue_Management />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
