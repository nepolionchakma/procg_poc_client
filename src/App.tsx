import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Alerts from "./Pages/Top/Alerts";
import Task from "./Pages/Top/Task";
import Notification from "./Pages/Top/Notification";
import Home from "./Pages/Top/Home";
import Risk_Management from "./Pages/Left/Risk_Management";
import Control_Management from "./Pages/Left/Control_Management";
import Issue_Management from "./Pages/Left/Issue_Management";
import Setup_and_Administration from "./Pages/Left/Setup_and_Administration";
import Result_Management from "./Pages/Left/Result_Management";
import Continuous_Control_Management from "./Pages/Left/Continuous_Control_Management";

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
        path: "/tasks",
        element: <Task />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
      {
        path: "/finance/risk-management",
        element: <Risk_Management />,
      },
      {
        path: "/finance/control-management",
        element: <Control_Management />,
      },
      {
        path: "/finance/issue-management",
        element: <Issue_Management />,
      },
      {
        path: "/continuous-monitoring/continuous-control-management",
        element: <Continuous_Control_Management />,
      },
      {
        path: "/continuous-monitoring/result-management",
        element: <Result_Management />,
      },
      {
        path: "/tools/setup-and-administration",
        element: <Setup_and_Administration />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
