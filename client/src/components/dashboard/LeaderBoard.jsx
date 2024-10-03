

import React from 'react';


const LeaderBoard =({ userImage, userName, userRank, rankIcon }) => {
  return (
    <div className="flex justify-between items-center bg-[#E7DBCA] px-5 py-2 rounded-3xl w-7/12 my-2">
      <div className="flex justify-between items-center w-[60%]">
        {rankIcon}
<div className='flex justify-center items-center'>
        <img src={userImage} alt={userName} className="w-10 h-10 rounded-full" />

        <p className="ml-2">{userName}</p>
        </div>
      </div>

      <p className="ml-4">{userRank}</p>
    </div>
  );
};

export default LeaderBoard;
