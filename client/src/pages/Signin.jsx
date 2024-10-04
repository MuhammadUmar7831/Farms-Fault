import React from "react";
import { Link } from "react-router-dom";
import Email from "../svgs/auth/Email";
import Password from "../svgs/auth/Password";

export default function Signin() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 bg-primary py-10">
      <h1 className="text-tertiary promoTest text-[35px] font-bold">
        Farm Faults
      </h1>
      <div className="w-[80%] bg-secondary authForm flex flex-col justify-start items-center pt-5 pb-16">
        <h1 className="text-[33px] poppins font-semibold">
          Login in Your account
        </h1>
        <div className="flex flex-wrap gap-[30px] mt-10 max-w-[728px] justify-center">
          <div className="flex flex-col gap-[3.9px] w-[544px]">
            <label htmlFor="email" className="poppins text-[20.48px]">
              Email Id:
            </label>
            <div className="flex w-full bg-transparent border border-tertiary rounded-[5px]">
              <input
                type="email"
                placeholder="info@provistechnologies.com"
                className="focus:outline-none bg-transparent w-full h-full py-2 px-4"
              />
              <div className="bg-tertiary h-full p-2 rounded-[5px]">
                <Email />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[3.9px] w-[544px]">
            <label htmlFor="email" className="poppins text-[20.48px]">
              Password
            </label>
            <div className="flex w-full bg-transparent border border-tertiary rounded-[5px]">
              <input
                type="password"
                placeholder="Enter you password"
                className="focus:outline-none bg-transparent w-full h-full py-2 px-4"
              />
              <div className="bg-tertiary h-full p-2 rounded-[5px]">
                <Password />
              </div>
            </div>
            <p className="poppins w-full text-end text-[18px] cursor-pointer hover:underline mt-1">
              Forget password?
            </p>
          </div>
          <div className="flex flex-col mt-10 gap-5 items-center w-[550px]">
            <button className="bg-tertiary loginBtnShadow w-[544px] rounded-[5px] py-3 text-center poppins text-[20.48px] font-semibold text-white">
              Login now
            </button>
            <div className="w-full flex justify-between items-center">
              <div className="w-[40%] h-[1px] bg-tertiary" />
              <span className="poppins text-[17px]">OR</span>
              <div className="w-[40%] h-[1px] bg-tertiary" />
            </div>
            <button className="bg-tertiary loginBtnShadow w-[349px] rounded-[5px] py-3 text-center poppins text-[13.66px] font-semibold text-white">
              Create account
            </button>
            <span className="poppins text-[13.66px] text-tertiary">
              Don't have an account? <Link to="/signup">Signup</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
