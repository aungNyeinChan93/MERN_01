import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/base/Navbar";
import SecondaryNavbar from "../components/base/SecondaryNavbar";
import { userInfoContext } from "../contexts/userInfoProvider";

const MasterLayout = () => {
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  const getUserInfo = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/user-info`,
        {
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("user-info fail!");
      }
      const { result: userData } = await response.json();
      setUserInfo(userData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <SecondaryNavbar />
      <Outlet />
    </React.Fragment>
  );
};

export default MasterLayout;
