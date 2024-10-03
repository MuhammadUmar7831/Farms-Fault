import React, { useState } from "react";
import SidePanel from "./sidePanel/SidePanel";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const [user, setUser] = useState("hell");
  return user !== null ? (
    <div className="bg-[#dacdbb]  flex">
      <main className="w-[20%] bg-[#F5EAD9]">
      <SidePanel/>
      </main>
      <section  className="w-[80%] ">
      <Outlet/>
      </section>
    </div>
  ) : (
    <Navigate to="/signin" />
  );
}
