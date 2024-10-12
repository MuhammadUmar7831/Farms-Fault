import React, { useEffect } from "react";
import Loader from "../svgs/Loader";
import toast from "react-hot-toast";
import { logoutApiCall } from "../apis/auth.api";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
  
    async function logout() {
    const response = await logoutApiCall();
    if (response.success) {
      toast.success(response.message);
      navigate("/");
    } else {
      toast.error(response.message);
    }
  }

  useEffect(() => {
    logout();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen gap-2">
      <span>
        <Loader color="#181c1e" className="animate-spin w-7 " />
      </span>
      <span className="txt-lg">Please wait...</span>
    </div>
  );
}
