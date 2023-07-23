import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-2xl mx-auto overflow-hidden">
      <AuthProvider>
        <RouterProvider router={route} />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
