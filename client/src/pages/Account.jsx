import React, { useEffect, useState } from "react";
import { deletetUserApiCall, getUserApiCall } from "../apis/auth.api";
import toast from "react-hot-toast";
import Loader from "../svgs/loader";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getUser() {
    const response = await getUserApiCall();
    if (response.success) {
      setUser(response.data);
    } else {
      toast.error(response.message);
    }
  }

  async function deleteUser() {
    setLoading(true);
    const reponse = await deletetUserApiCall();
    if (reponse.success) {
      toast.success(reponse.message);
      navigate("/");
    } else {
      toast.error(reponse.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (user === null) {
    return <main className="bg-prim w-full h-full"></main>;
  }

  return (
    <main className="bg-primary pt-10">
      <h1 className="promoTest font-semibold text-[36px] ml-10">
        Account settings
      </h1>
      <div className="flex flex-wrap gap-[30px] mt-10 max-w-[728px] justify-center mx-auto px-2 md:px-0">
        <div className="flex flex-col gap-[3.9px] w-[349px]">
          <label htmlFor="first-name" className="poppins text-[13.66px]">
            First Name
          </label>
          <input
            type="text"
            className="w-full bg-transparent border poppins border-tertiary rounded-[5px] p-2 focus:outline-none"
            value={user.firstName}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-[3.9px] w-[349px]">
          <label htmlFor="last-name" className="poppins text-[13.66px]">
            Last Name
          </label>
          <input
            type="text"
            className="w-full bg-transparent border poppins border-tertiary rounded-[5px] p-2 focus:outline-none"
            value={user.lastName}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-[3.9px] w-[349px]">
          <label htmlFor="email-phone" className="poppins text-[13.66px]">
            Email
          </label>
          <input
            type="email"
            className="w-full bg-transparent border poppins border-tertiary rounded-[5px] p-2 focus:outline-none"
            value={user.email}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-[3.9px] w-[349px]">
          <label htmlFor="dob" className="poppins text-[13.66px]">
            Date of birth <span className="text-[10px]">(MM/DD/YY)</span>
          </label>
          <input
            type="text"
            className="w-full bg-transparent border poppins border-tertiary rounded-[5px] p-2 focus:outline-none"
            value={user.dob}
            readOnly
          />
        </div>
        {/* <div className="flex flex-col gap-[3.9px] w-[349px]">
          <label htmlFor="password" className="poppins text-[13.66px]">
            Password
          </label>
          <input
            type="password"
            className="w-full bg-transparent border poppins border-tertiary rounded-[5px] p-2 focus:outline-none"
            value={user.password}
            readOnly
          />
        </div> */}
        <div className="w-[349px]" />
        <div className="flex flex-col gap-5 items-start w-full mx-auto md:mx-0">
          <button
            onClick={deleteUser}
            className="bg-tertiary w-full md:w-[349px] rounded-[5px] py-3 text-center poppins text-[13.66px] font-semibold text-white"
          >
            {loading ? (
              <Loader color="#fff" className="w-[20px] h-[20px] mx-auto" />
            ) : (
              "Delete Account"
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
