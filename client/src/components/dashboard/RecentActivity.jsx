import React from "react";
import Coin from "../../svgs/dashboardSvgs/Coin.svg"; 

const RecentActivity = ({ imageSrc, username, activity, number }) => {
  return (
    <div className="flex justify-between items-center bg-[#E7DBCA] rounded-3xl w-11/12 my-2">
      <img className="w-11 object-contain" src={imageSrc} alt="User" />
      <p className="text-lg">{`${username} reported ${activity}`}</p>
      <div className="flex justify-center items-center px-3">
        <p className="mx-2">{number}</p>
        <Coin />
      </div>
    </div>
  );
};

export default RecentActivity;
