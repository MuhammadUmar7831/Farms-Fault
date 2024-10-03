import React from "react";
import RankIcon from "../svgs/dashboardSvgs/Rank.svg";
import img from "../../public/images/dashboard/image.png";
import LeaderBoard from "../components/dashboard/LeaderBoard";
import RecentActivity from "../components/dashboard/RecentActivity";
export default function Dashboard() {
  const activities = [
    {
      imageSrc: img,
      username: "user1",
      activity: "Weed Infestation",
      number: 10,
    },
    {
      imageSrc: img,
      username: "user1",
      activity: "Weed Infestation",
      number: 5,
    },
    {
      imageSrc: img,
      username: "user1",
      activity: "Weed Infestation",
      number: 5,
    },
    {
      imageSrc: img,
      username: "user1",
      activity: "Weed Infestation",
      number: 7,
    },
    {
      imageSrc: img,
      username: "user1",
      activity: "Weed Infestation",
      number: 5,
    },
    {
      imageSrc: img,
      username: "user1",
      activity: "Weed Infestation",
      number: 10,
    },
    {
      imageSrc: img,
      username: "user1",
      activity: "Weed Infestation",
      number: 10,
    },
    {
      imageSrc: img,
      username: "user1",
      activity: "Weed Infestation",
      number: 10,
    },
    {
      imageSrc: img,
      username: "user1",
      activity: "Weed Infestation",
      number: 10,
    },
  ];

  const leaderBoardData = [
    {
      userImage: img,
      userName: "User1",
      userRank: 100,
      rankIcon: <RankIcon />,
    },
    {
      userImage: img,
      userName: "User1",
      userRank: 100,
      rankIcon: <RankIcon />,
    },
    {
      userImage: img,
      userName: "User1",
      userRank: 100,
      rankIcon: <RankIcon />,
    },
    {
      userImage: img,
      userName: "User1",
      userRank: 100,
      rankIcon: <RankIcon />,
    },
    {
      userImage: img,
      userName: "User1",
      userRank: 100,
      rankIcon: <RankIcon />,
    },
  ];

  return (
    <section className="py-10  overflow-x-hidden">
      <h1 className="text-3xl text-[#181C1E] ml-10">Welcome Back, John!</h1>

      <section className=" bg-[#E7DBCA] text-[#181c1e] flex justify-around items-center w-[40%] px-4 py-3 rounded-3xl mt-10 ml-[25%] mb-5">
        <div className=" flex flex-col justify-center items-center text-xl">
          <p className="mb-1">12</p>
          <p className="px-6 rounded-3xl border-2 border-[#181c1e]">Rank</p>
        </div>
        <div className=" flex flex-col justify-center items-center text-xl">
          <p className="mb-1">99</p>
          <p className="px-6 rounded-3xl border-2 border-[#181c1e]">Points</p>
        </div>
        <div className=" flex flex-col justify-center items-center text-xl">
          <p className="mb-1">99</p>
          <p className="px-6 rounded-3xl border-2 border-[#181c1e]">Errors</p>
        </div>
      </section>

      <section className=" flex ml-10 2">
        <section className="w-3/6 ">
          <h1 className="text-[#181C1E] text-4xl my-5 ">Recent Activity</h1>

          <section className="custom-scrollbar overflow-y-auto h-96">
            {activities.map((activity, index) => (
              <RecentActivity
                key={index}
                imageSrc={activity.imageSrc}
                username={activity.username}
                activity={activity.activity}
                number={activity.number}
              />
            ))}
          </section>
        </section>
        <section className=" pl-10 w-3/6">
          <div className=" flex  gap-7 items-center  w-3/5">
            <h1 className="text-[#181C1E] text-4xl my-5 ">Leaderboard</h1>
            <p className="mt-3">
              <a className="underline" href="">
                View all
              </a>
            </p>
          </div>

          <div className=" ml-4 w-1/2 flex justify-between items-center">
            <p>Rank</p>
            <p>Points</p>
          </div>

          {leaderBoardData.map((leader, index) => (
            <LeaderBoard
              key={index}
              userImage={leader.userImage}
              userName={leader.userName}
              userRank={leader.userRank}
              rankIcon={leader.rankIcon}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
