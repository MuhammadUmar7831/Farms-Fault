import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const [user, setUser] = useState("null");
  return user !== null ? (
    <>
      {/* <SidePanel /> */}
      <Outlet />
    </>
  ) : (
    <Navigate to="/signin" />
  );
}
