import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Surveys from "./views/Surveys";
import Login from "./views/Login";
import Signup from "./views/Signup";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import SurveyView from "./views/SurveyView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "surveys",
            element: <Surveys />
          },
          {
            path: "surveys/create",
            element: <SurveyView />  
          }
        ]
      },
      {
        path: "/auth",  
        element: <GuestLayout />,
        children: [
          {
            path: "login",
            element: <Login />
          },
          {
            path: "signup",
            element: <Signup />
          }
        ]
      }
    ]);
    

export default router;