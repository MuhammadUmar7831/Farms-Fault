import React from 'react';
import RankIcon from '../../svgs/dashboardSvgs/Rank.svg'; 

const RankCard = ({ className, rank, userImage, userName, score }) => {
  return (
    <div className={`flex justify-between gap-2 items-center px-5 rounded-3xl py-1 bg-[#E7DBCA] my-1 text-[10px] sm:text-xs lg:text-base xl:text-lg  ${className}`}>
      <div className='flex justify-center items-center gap-3 sm:gap-7'>
        <div className='flex items-center gap-2 lg:gap-5 w-12'>
        <p className={`${rank==1?" w-[16px] sm:w-[20px]":""}`}>{rank}{rank===1?"st":""}{rank===2?"nd":""}{rank===3?"rd":""}{rank>3?"th":""}</p>
        <RankIcon className=" w-4"/>

        </div>
        <div className='flex  items-center gap-2 w-[95%]'>
          <img className='w-6 rounded-full' src={userImage} alt="User" />
          <p>{userName}</p>
        </div>
      </div>
      <p>{score}</p>
    </div>
  );
};

export default RankCard;
