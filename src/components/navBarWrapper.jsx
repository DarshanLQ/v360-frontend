import React from "react";
import NavBar from "./navBar";
import { Outlet } from "react-router-dom";

const NavBarWrapper = () => {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default NavBarWrapper;
