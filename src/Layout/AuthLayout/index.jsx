import React from "react";
import { Outlet } from "react-router-dom";
import { AuthWrapper } from "./ui";

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
};

export default AuthLayout;
