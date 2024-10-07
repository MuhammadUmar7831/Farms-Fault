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
      <div className="bg-[#dacdbb] flex">
        <main className={`w-[35%] bg-[#F5EAD9] absolute sm:w-[20%] sm:relative h-screen`}>
        <SidePanel />
      </main>

      <section className=" w-full sm:w-[80%]">
      <Outlet />
      </section>
      </div>
    </>
  ) : (
    <Navigate to="/signin" />
  );
}
