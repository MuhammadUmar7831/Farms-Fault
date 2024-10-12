import React from "react";
import RankIcon from "../../svgs/dashboardSvgs/Rank.svg";
import getRandomDarkColor from "../../utils/randomColor";

const RankCard = ({ className, rank, userImage, userName, score }) => {
  return (
    <div
      className={`flex justify-between gap-2 items-center px-5 rounded-3xl py-1 bg-[#E7DBCA] my-1 text-[10px] sm:text-xs lg:text-base xl:text-lg  ${className}`}
    >
      <div className="flex justify-center items-center gap-3 sm:gap-7">
        <div className="flex items-center gap-2 lg:gap-5 w-20 ">
          <p
            className={`${
              rank == 1 ? " w-[16px] sm:w-[20px] md:w-[20px] lg:w-[32px]" : ""
            }`}
          >
            {rank}
            {rank === 1 ? "st" : ""}
            {rank === 2 ? "nd" : ""}
            {rank === 3 ? "rd" : ""}
            {rank > 3 ? "th" : ""}
          </p>
          <RankIcon className=" w-4 sm:w-9" />
        </div>
        <div className="flex  items-center gap-2 w-[95%]">
          {userImage === "N/A" ? (
            <span
              className="w-6 h-6 rounded-full text-white text-sm text-center flex items-center justify-center"
              style={{ backgroundColor: getRandomDarkColor() }}
            >
              {userName[0].toUpperCase()}
            </span>
          ) : (
            <img className="w-6 rounded-full" src={userImage} alt="User" />
          )}
          <p>{userName}</p>
        </div>
      </div>
      <p>{score}</p>
    </div>
  );
};

export default RankCard;
