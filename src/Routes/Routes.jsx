import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";



export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      }
    ]
  }
])

