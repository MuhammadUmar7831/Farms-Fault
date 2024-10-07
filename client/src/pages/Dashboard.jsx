import React, { useEffect, useState } from "react";
import RankIcon from "../svgs/dashboardSvgs/Rank.svg";
import img from "../../public/images/dashboard/image.png";
import LeaderBoard from "../components/dashboard/LeaderBoard";
import RecentActivity from "../components/dashboard/RecentActivity";
import { getUserStats, recentErrors } from "../apis/dashboard.api";
import { Link } from "react-router-dom";
import { dashboard_leaderboardTopUsers } from "../apis/dashboard.api";
export default function Dashboard() {

  const [user, setUser] = useState({ name: 'User' });
  const [buttonDisable, setbuttonDisable] = useState(false);
  const [leaderBoardData, setleaderBoardData] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [stats, setStats] = useState({ totalPoints: 0, totalErrors: 0, rank: 0 });
  const [pageNumber,setPageNumber]=useState(0);


  const handleNextPage = () => {
    console.log(" next");
    setPageNumber(prevPage => prevPage + 1); // increment the page number correctly
  };
  
  const handlePreviousPage = () => {
    console.log(" prev");
    setbuttonDisable(false);
    if (pageNumber > 0) {
      setPageNumber(prevPage => prevPage - 1); // decrement the page number correctly
    }
  };
  

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const userStats = await getUserStats("6701086467b97a4b1e2ef0b2");
        setUser(userStats.user);
        setStats(userStats.stats);
  
        const leaderboardResponse = await dashboard_leaderboardTopUsers();
        setleaderBoardData(leaderboardResponse.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchAllData();
  }, []);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await recentErrors(pageNumber);
     
          setRecentActivity(response.data.formattedErrors);
          setbuttonDisable(response.data.disableNextButton);       
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pageNumber]);








  const { totalPoints, totalErrors, rank } = stats;


  return (
    <section className="py-10 bg-primary ">
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#181C1E] ml-5 lg:ml-10">
            Welcome Back, {`${user.firstName || ''} ${user.lastName || ''}`.trim() || user.name}!

            </h1>
            {totalPoints || totalErrors || rank ? ( // Check if any stats are available
        <section className="bg-[#E7DBCA] text-[#181c1e] flex justify-around text-[9px] sm:text-xs md:text-sm lg:text-lg xl:text-xl items-center w-10/12 sm:w-[45%] md:w-[50%] xl:w-[40%] sm:px-3 xl:px-4 py-3 rounded-lg sm:rounded-2xl lg:rounded-3xl mt-10 mx-auto sm:mx-0 sm:ml-[36%] md:ml-[30%] lg:ml-[30%] xl:ml-[25%] mb-5">
          <div className="flex flex-col justify-center items-center">
            <p className="mb-1">{rank}</p>
            <p className="px-3 md:px-5 lg:px-6 rounded-3xl border-2 border-[#181c1e]">Rank</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="mb-1">{totalPoints}</p>
            <p className="px-3 md:px-5 lg:px-6 rounded-3xl border-2 border-[#181c1e]">Points</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="mb-1">{totalErrors}</p>
            <p className="px-3 md:px-5 lg:px-6 rounded-3xl border-2 border-[#181c1e]">Errors</p>
          </div>
        </section>
      ) : (
        <p className="mt-5 text-center">Loading stats...</p> // Optional loading state
      )}

      <section className=" sm:flex sm:ml-5 lg:ml-10">
        <section className=" px-2 sm:w-3/6 h-fit ">
          <h1 className="text-[#181C1E] text-lg lg:text-3xl xl:text-4xl my-2 sm:my-5 sm:pl-0 pl-3">Recent Activity</h1>

          <section className={`custom-scrollbar overflow-y-auto ${recentActivity.length<=8?"h-fit":"h-[392px]"} `}>
          {recentActivity?.map((activity, index) => (
  <RecentActivity
    key={index}
    imageSrc={activity.user?.avatar}         // User's avatar
    username={`${activity.user.firstName} ${activity.user.lastName}`} // Full username
    errorType={activity.errorType}         // Error type
    points={activity.points}                // Points
  />
))}

          </section>
          <div className=" flex justify-evenly items-center mt-7">
          <button onClick={handlePreviousPage} disabled={pageNumber == 0} className="px-4 py-2 cursor-pointer  border-2 border-[#181c1e]  bg-[#E7DBCA] rounded-lg" >
            Previous
          </button>
          <p>Page No: {pageNumber+1}</p>
          <button onClick={handleNextPage}   disabled={buttonDisable}  className="px-4 py-2 cursor-pointer border-2 border-[#181c1e] bg-[#E7DBCA]  rounded-lg" >
            Next
          </button>
          </div>

        </section>
        <section className="  w-full px-3 sm:ml-5 lg:ml-10 sm:w-3/6 ">
          <div className="  flex justify-between items-center w-full lg:w-[80%] xl:w-[68%]">
            <h1 className="text-[#181C1E] text-lg sm:text-xl lg:text-3xl xl:text-4xl my-5 ">Leaderboard</h1>
            <p>
              <Link to="/leaderboard" className="underline  text-sm lg:text-base">
                View all
                </Link>
            </p>
          </div>

          <div className=" sm:ml-5 text-xs sm:text-base px-3 sm:px-1 sm:w-[65%] lg:w-[80%] xl:w-[66%]  flex justify-between items-center">
            <p>Rank</p>
            <p>Points</p>
          </div>

          {leaderBoardData?.map((leader, index) => (
            <LeaderBoard
              key={index}
              userImage={img}
              userName={leader.name}
              totalPoints={leader.totalPoints}
              rankIcon={<RankIcon className=" w-3 sm:w-4 lg:w-5"/>}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
