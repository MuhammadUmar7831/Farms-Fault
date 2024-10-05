import React from "react";
import { Link } from "react-router-dom";
const SideBarLinks = ({
  href,
  svg,
  text,
}) => {
  return (
    <div className="mt-5 lg:mt-10 w-full sm:w-fit mx-auto pl-2 sm:pl-0 sm:mx-0 sm:ml-4 lg:ml-10">
      <Link className="flex items-center gap-1 sm:gap-3" to={href}>
        <div>{svg}</div>
        <p className=" text-[8px] sm:text-xs md:text-sm lg:text-lg xl:text-2xl">{text}</p>
      </Link>
    </div>
  );
};

export default SideBarLinks;
