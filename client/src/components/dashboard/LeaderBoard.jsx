

import React from 'react';


const LeaderBoard =({ userImage, userName, totalPoints, rankIcon }) => {
  return (
    <div className="flex justify-between items-center bg-[#E7DBCA] px-5 p-[2px] sm:py-2 rounded-3xl sm:w-[75%] lg:w-[65%] xl:w-[70%] my-2 text-[7px] sm:text-[9px] md:text-xs lg:text-sm">
      <div className="flex items-center w-full gap-3">
        {rankIcon}
<div className='flex items-center w-full'>
        <img src={userImage} alt={userName} className="  w-6 md:w-7 lg:w-9 xl:w-10 object-contain rounded-full" />

        <p className="ml-2">{userName}</p>
        </div>
      </div>

      <p>{totalPoints}</p>
    </div>
  );
};

export default LeaderBoard;
