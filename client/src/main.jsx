import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router";
import UserInfoProvider from "./contexts/userInfoProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserInfoProvider>
      <RouterProvider router={router} />
    </UserInfoProvider>
  </StrictMode>
);
