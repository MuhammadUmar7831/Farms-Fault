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
      rankIcon: <RankIcon className=" w-3 sm:w-4 lg:w-5"/>,
    },
    {
      userImage: img,
      userName: "User1",
      userRank: 100,
      rankIcon: <RankIcon className=" w-3 sm:w-4 lg:w-5 "/>,
    },
    {
      userImage: img,
      userName: "User1",
      userRank: 100,
      rankIcon: <RankIcon className=" w-3 sm:w-4 lg:w-5"/>,
    },
    {
      userImage: img,
      userName: "User1",
      userRank: 100,
      rankIcon: <RankIcon className=" w-3 sm:w-4 lg:w-5 "/>,
    },
    {
      userImage: img,
      userName: "User1",
      userRank: 100,
      rankIcon: <RankIcon className=" w-3 sm:w-4 lg:w-5 "/>,
    },
  ];

  return (
    <section className="py-10  overflow-x-hidden">
      <h1 className=" text-xl sm:text-2xl lg:text-3xl text-[#181C1E] ml-5 lg:ml-10">Welcome Back, John!</h1>

      <section className=" bg-[#E7DBCA] text-[#181c1e] flex justify-around text-[9px] sm:text-xs md:text-sm lg:text-lg xl:text-xl items-center w-10/12 sm:w-[45%] md:w-[50%] xl:w-[40%] sm:px-3 xl:px-4 py-3 rounded-lg sm:rounded-2xl lg:rounded-3xl mt-10  mx-auto sm:mx-0 sm:ml-[36%] md:ml-[30%] lg:ml-[30%] xl:ml-[25%] mb-5">
        <div className=" flex flex-col justify-center items-center">
          <p className="mb-1">12</p>
          <p className=" px-3 md:px-5 lg:px-6 rounded-3xl border-2 border-[#181c1e]">Rank</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="mb-1">99</p>
          <p className="px-3 md:px-5  lg:px-6 rounded-3xl border-2 border-[#181c1e]">Points</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="mb-1">99</p>
          <p className="px-3 md:px-5  lg:px-6 rounded-3xl border-2 border-[#181c1e]">Errors</p>
        </div>
      </section>

      <section className=" sm:flex sm:ml-5 lg:ml-10">
        <section className=" px-2 sm:w-3/6 ">
          <h1 className="text-[#181C1E] text-lg lg:text-3xl xl:text-4xl my-2 sm:my-5 sm:pl-0 pl-3">Recent Activity</h1>

          <section className="custom-scrollbar overflow-y-auto h-96 px-2">
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
        <section className="  w-full px-3 sm:ml-5 lg:ml-10 sm:w-3/6">
          <div className="  flex justify-between sm:justify-normal sm:gap-7 items-center w-full lg:w-[80%] xl:w-3/5">
            <h1 className="text-[#181C1E] text-lg sm:text-xl lg:text-3xl xl:text-4xl my-5 ">Leaderboard</h1>
            <p>
              <a className="underline  text-sm lg:text-base" href="">
                View all
              </a>
            </p>
          </div>

          <div className=" sm:ml-5 text-xs sm:text-base px-3 sm:px-0 sm:w-[65%] lg:w-[56%] xl:w-1/2  flex justify-between items-center">
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
