import React from "react";
import { useState } from "react";
import Filter from "../svgs/leaderBoardSvgs/Filter.svg";
import RankIcon from "../svgs/dashboardSvgs/Rank.svg";
import img from "../../public/images/leaderboard/image.png";
import RankCard from "../components/leaderboard/RankCard";
export default function Leaderboard() {

  const [selectedOption, setSelectedOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setShowDropdown(false); // Close the dropdown after selecting
  };



  const rankCardData = [
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
    { rank: "1st", userImage: img, userName: "user1", score: 100 },
    { rank: "2nd", userImage: img, userName: "user1", score: 100 },
    { rank: "3rd", userImage: img, userName: "user1", score: 100 },
  ];

  return (
    <main className=" pl-5 lg:pl-10 h-screen">
      <div className=" w-[65%] lg:w-[60%] flex items-center justify-between mt-10  ml-[5%] lg:ml-0">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl">Leader Board</h1>
        <div className="flex justify-between gap-4 items-center">
          <p className=" text-sm lg:text-base">Filter by time </p>
          <button
          onClick={handleToggleDropdown}
        >
          <Filter className=" w-3 lg:w-4 xl:w-5"/>
        </button>
        </div>
        {showDropdown && (
          <div className="absolute right-[10%] lg:right-[20%] xl:right-[24%] top-20  w-fit px-7 bg-[#e7dbca] border border-gray-300 rounded-md shadow-lg z-10">
            <ul className="flex flex-col justify-center items-center ">
              <li
                onClick={() => handleSelectOption('Weekly')}
                className="py-2 hover:bg-gray-100 cursor-pointer"
              >
                Weekly
              </li>
              <li
                onClick={() => handleSelectOption('Monthly')}
                className="py-2 hover:bg-gray-100 cursor-pointer"
              >
                Monthly
              </li>
              <li
                onClick={() => handleSelectOption('All Time')}
                className="py-2 hover:bg-gray-100 cursor-pointer"
              >
                All Time
              </li>
            </ul>
          </div>
        )}
      </div>

      <section className=" my-8 px-3 h-[420px] ml-[7%] w-[60%] lg:w-[50%]">
        <div className="flex justify-between items-center text-lg xl:text-xl py-2 px-7">
          <p>Rank</p>
          <p>Points</p>
        </div>

        <section className="custom-scrollbar overflow-y-auto px-4">
          {rankCardData.map((card, index) => (
            <RankCard
              key={index}
              className="" // Add any className if needed
              rank={card.rank}
              userImage={card.userImage}
              userName={card.userName}
              score={card.score}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
