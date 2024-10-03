import React, { useState } from "react";

export default function PrivateRoutes() {
  const [user, setUser] = useState(null);
  return user !== null ? (
    <>
      <Dahsboard />
      <Outlet />
    </>
  ) : (
    <Navigate to="/signin" />
  );
}
