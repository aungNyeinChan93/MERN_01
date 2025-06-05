import React from "react";
import { Link } from "react-router";

const GuestNavbar = () => {
  return (
    <React.Fragment>
      <header className="bg-white">
        <div className=" flex justify-between mx-[200px] items-center my-[30px]">
          <Link
            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            to="/auth/login"
          >
            Login
          </Link>

          <Link
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            to="/auth/register"
          >
            Register
          </Link>
        </div>
      </header>
    </React.Fragment>
  );
};

export default GuestNavbar;
