import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyApiCall } from "../apis/auth.api";
import SidePanel from "./sidePanel/SidePanel";
import Loader from "../svgs/Loader";

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
    return (
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <Loader color="#181C1E" className="w-10 h-10  animate-spin" />{" "}
        {/* Loader Component */}
        <h1 className="heading txt py-3">Authenticating...</h1>
      </div>
    );
  }

  return loggedIn ? (
    <div className="flex bg-secondary">
      <SidePanel />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
}
