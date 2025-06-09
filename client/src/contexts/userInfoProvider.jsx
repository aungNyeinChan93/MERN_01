import React, { useState } from "react";
import { createContext } from "react";

export const userInfoContext = createContext();

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const name = "userInfoContext";
  return (
    <userInfoContext.Provider value={{ name, userInfo, setUserInfo }}>
      {children}
    </userInfoContext.Provider>
  );
};

export default UserInfoProvider;
