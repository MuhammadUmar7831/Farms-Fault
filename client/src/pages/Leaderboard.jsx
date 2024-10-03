import React from "react";
import Filter from "../svgs/leaderBoardSvgs/Filter.svg";
import RankIcon from "../svgs/dashboardSvgs/Rank.svg";
import img from "../../public/images/leaderboard/image.png";
import RankCard from "../components/leaderboard/RankCard";
export default function Leaderboard() {
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
  ];

  return (
    <main className="pl-10 h-screen">
      <div className=" w-[60%] flex items-center justify-between mt-10">
        <h1 className="text-3xl">Leader Board</h1>
        <div className="flex justify-between gap-4 items-center">
          <p>Filter by time </p>
          <a href="">
            <Filter />
          </a>
        </div>
      </div>

      <section className=" my-8 px-3 h-[420px] ml-[7%] w-[50%]">
        <div className="flex justify-between items-center text-xl p-2">
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
