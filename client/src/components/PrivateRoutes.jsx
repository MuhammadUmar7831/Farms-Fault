import React, { useState } from "react";
import SidePanel from "./sidePanel/SidePanel";
import { Navigate, Outlet } from "react-router-dom";
// import { Hamburger } from 'hamburger-react';

export default function PrivateRoutes() {
  const [user, setUser] = useState("hell");
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true); // State to manage SidePanel visibility

  return user !== null ? (
    <div className="bg-[#dacdbb] flex">
      <main className={`w-[25%] sm:w-[20%] bg-[#F5EAD9] ${isSidePanelOpen ? 'block' : 'hidden'} sm:block`}>

        <SidePanel />
      </main>

      <section className="w-[75%] sm:w-[80%]">
        <Outlet />
      </section>
    </div>
  ) : (
    <Navigate to="/signin" />
  );
}
