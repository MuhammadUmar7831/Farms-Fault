import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyApiCall } from "../apis/auth.api";
import SidePanel from '../components/sidePanel/SidePanel'

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
      {/* <div className="bg-[#dacdbb] flex">
      <main className={`w-[25%] sm:w-[20%] bg-[#F5EAD9] sm:block`}>
        <SidePanel />
      </main> */}

      {/* <section className="w-[75%] sm:w-[80%]"> */}
      <Outlet />
      {/* </section> */}
      {/* </div> */}
    </>
  ) : (
    <Navigate to="/signin" />
  );
}
