

import React from 'react';


const LeaderBoard =({ userImage, userName, userRank, rankIcon }) => {
  return (
    <div className="flex justify-between items-center bg-[#E7DBCA] px-5 p-[2px] sm:py-1 xl:py-2 rounded-3xl sm:w-[75%] lg:w-[65%] xl:w-7/12 my-2 text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-lg">
      <div className="flex justify-between items-center w-[60%]">
        {rankIcon}
<div className='flex justify-center items-center '>
        <img src={userImage} alt={userName} className="  w-6 md:w-7 lg:w-9 xl:w-10 object-contain rounded-full" />

        <p className="ml-2">{userName}</p>
        </div>
      </div>

      <p>{userRank}</p>
    </div>
  );
};

export default LeaderBoard;
