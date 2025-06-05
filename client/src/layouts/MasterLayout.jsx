import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/base/Navbar";

const MasterLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default MasterLayout;
