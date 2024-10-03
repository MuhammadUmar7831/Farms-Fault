import React from 'react';
import RankIcon from '../../svgs/dashboardSvgs/Rank.svg'; 

const RankCard = ({ className, rank, userImage, userName, score }) => {
  return (
    <div className={`flex justify-between items-center px-5 rounded-3xl py-1 bg-[#E7DBCA] my-1 ${className}`}>
      <div className='flex justify-center items-center gap-7'>
        <div className='flex justify-between items-center gap-3 w-14'>
          <p>{rank}</p>
          <RankIcon className=" w-4"/>

        </div>
        <div className='flex justify-between items-center gap-2'>
          <img className='w-6' src={userImage} alt="User" />
          <p>{userName}</p>
        </div>
      </div>
      <p>{score}</p>
    </div>
  );
};

export default RankCard;
