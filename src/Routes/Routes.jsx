import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Login from "../Pages/Shared/Footer/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/colleges",
        element:<Colleges/>
      },
      {
        path: "/admission",
        element:<Admission/>
      },
      {
        path: "/my-college",
        element:<MyCollege/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path:"/singUp",
        element:<SignUp/>
      }
    ]
  }
])

