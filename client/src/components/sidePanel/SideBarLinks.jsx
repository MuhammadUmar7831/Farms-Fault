import React from "react";

const SideBarLinks = ({
  href,
  svg,
  text,
}) => {
  return (
    <div className="mt-10 w-fit ml-4 lg:ml-10">
      <a className="flex items-center gap-3" href={href}>
        <div>{svg}</div>
        <p className=" text-sm lg:text-lg xl:text-2xl">{text}</p>
      </a>
    </div>
  );
};

export default SideBarLinks;
