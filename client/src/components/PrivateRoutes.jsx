import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyApiCall } from "../apis/auth.api";

export default function PrivateRoutes() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  async function verifyLogin() {
    if (!loggedIn) {
      const res = await verifyApiCall();
      setIsLoggedIn(res.success);
      setLoading(false);
    }
  }

  useEffect(() => {
    verifyLogin();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return loggedIn ? (
    <>
      {/* <SidePanel /> */}
      <Outlet />
    </>
  ) : (
    <Navigate to="/signin" />
  );
}
