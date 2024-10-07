import React from "react";
import Coin from "../../svgs/dashboardSvgs/Coin.svg"; 

const RecentActivity = ({ imageSrc, username, errorType, points }) => {
  return (
    <div className="flex justify-between items-center bg-[#E7DBCA] rounded-3xl w-full lg:w-11/12 my-2 text-[7px] sm:text-[10px]  text-ellipsis">
     <div className="flex  items-center gap-3">
      <img className=" w-6 md:w-7 lg:w-9 xl:w-10 object-contain rounded-full" src={imageSrc} alt="User" />
      <p>{`${username} reported ${errorType}`}</p>
      </div>
      <div className="flex justify-center items-center px-3">
        <p className="mx-2">{points}</p>
        <Coin />
      </div>
    </div>
  );
};

export default RecentActivity;
