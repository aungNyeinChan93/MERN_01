import React from "react";
import { Outlet } from "react-router";
import GuestNavbar from "../components/base/GuestNavbar";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <GuestNavbar />
      <Outlet />
    </React.Fragment>
  );
};

export default AuthLayout;
