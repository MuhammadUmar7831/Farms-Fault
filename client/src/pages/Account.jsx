import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <main className="bg-primary pt-10" >
      <h1 className="promoTest font-semibold text-[36px] ml-10">Account settings</h1>
      <div className="flex flex-wrap gap-[30px] mt-10 max-w-[728px] justify-center mx-auto">
        <div className="flex flex-col gap-[3.9px] w-[349px]">
          <label htmlFor="first-name" className="poppins text-[13.66px]">
            First Name
          </label>
          <input
            type="text"
            className="w-full bg-transparent border border-tertiary rounded-[5px] p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-[3.9px] w-[349px]">
          <label htmlFor="last-name" className="poppins text-[13.66px]">
            Last Name
          </label>
          <input
            type="text"
            className="w-full bg-transparent border border-tertiary rounded-[5px] p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-[3.9px] w-[349px]">
          <label htmlFor="email-phone" className="poppins text-[13.66px]">
            Email or phone number
          </label>
          <input
            type="email"
            className="w-full bg-transparent border border-tertiary rounded-[5px] p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-[3.9px] w-[349px]">
          <label htmlFor="dob" className="poppins text-[13.66px]">
            Date of birth <span className="text-[10px]">(MM/DD/YY)</span>
          </label>
          <input
            type="text"
            className="w-full bg-transparent border border-tertiary rounded-[5px] p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-[3.9px] w-full">
          <label htmlFor="password" className="poppins text-[13.66px]">
            Password
          </label>
          <input
            type="password"
            className="w-[349px] bg-transparent border border-tertiary rounded-[5px] p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-5 items-start w-full">
          <button className="bg-tertiary w-[349px] rounded-[5px] py-3 text-center poppins text-[13.66px] font-semibold text-white">
            Create Account
          </button>
          <span className="poppins text-[13.66px] text-tertiary">
            Don’t have an account? <Link to="/signin">Log In</Link>
          </span>
        </div>
      </div>
    </main>
  );
}
