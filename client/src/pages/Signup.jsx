import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 bg-primary py-10">
      <h1 className="text-tertiary promoTest text-[35px] font-bold">
        Farm Faults
      </h1>
      <div className="w-[80%] bg-secondary authForm flex flex-col justify-start items-center pt-5 pb-16">
        <h1 className="text-[33px] poppins font-semibold">Create account</h1>
        <div className="flex flex-wrap gap-[30px] mt-10 max-w-[728px] justify-center">
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
              Date of Birth
            </label>
            <input
              type="text"
              className="w-full bg-transparent border border-tertiary rounded-[5px] p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[3.9px] w-[349px]">
            <label htmlFor="password" className="poppins text-[13.66px]">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-transparent border border-tertiary rounded-[5px] p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[3.9px] w-[349px]">
            <label
              htmlFor="confirm-password"
              className="poppins text-[13.66px]"
            >
              Confirm Password
            </label>
            <input
              type="text"
              className="w-full bg-transparent border border-tertiary rounded-[5px] p-2 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="block bg-transparent"
              />
              <label htmlFor="remember" className="poppins text-[13.66px]">
                Remember me
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="block bg-transparent"
              />
              <label htmlFor="remember" className="poppins text-[13.66px]">
                I agree to all Terms and Privacy Policy
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-14 gap-5 items-center">
            <button className="bg-tertiary w-[349px] rounded-[5px] py-3 text-center poppins text-[13.66px] font-semibold text-white">
              Create Account
            </button>
            <span className="poppins text-[13.66px] text-tertiary">
              Don’t have an account? <Link to="/signin">Log In</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
