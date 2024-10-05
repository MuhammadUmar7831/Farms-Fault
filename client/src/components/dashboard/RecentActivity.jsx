import React from "react";
import Coin from "../../svgs/dashboardSvgs/Coin.svg"; 

const RecentActivity = ({ imageSrc, username, activity, number }) => {
  return (
    <div className="flex justify-between items-center bg-[#E7DBCA] rounded-3xl w-full lg:w-11/12 my-2 text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-lg">
      <img className=" w-6 md:w-7 lg:w-9 xl:w-10 object-contain" src={imageSrc} alt="User" />
      <p>{`${username} reported ${activity}`}</p>
      <div className="flex justify-center items-center px-3">
        <p className="mx-2">{number}</p>
        <Coin />
      </div>
    </div>
  );
};

export default RecentActivity;
