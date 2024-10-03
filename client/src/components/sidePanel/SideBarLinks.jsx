import React from "react";

const SideBarLinks = ({
  href,
  svg,
  text,
  containerClass = "mt-10 border-2 w-fit mx-auto",
  linkClass = "flex items-center gap-3",
  textClass = "text-2xl",
}) => {
  return (
    <div className={containerClass}>
      <a className={linkClass} href={href}>
        <div>{svg}</div>
        <p className={textClass}>{text}</p>
      </a>
    </div>
  );
};

export default SideBarLinks;
