import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex gap-2 heading">
          {/* <span>:(</span> */}
          <span>404</span>
          <span>Page not found</span>
        </div>
      </div>
      <Footer />
    </>
  );
}
