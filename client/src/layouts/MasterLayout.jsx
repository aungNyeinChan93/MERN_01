import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/base/Navbar";
import SecondaryNavbar from "../components/base/SecondaryNavbar";

const MasterLayout = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <SecondaryNavbar />
      <Outlet />
    </React.Fragment>
  );
};

export default MasterLayout;
