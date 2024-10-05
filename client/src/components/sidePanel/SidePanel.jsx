import SideBarLinks from "./SideBarLinks";
import Account from "../../svgs/sidePanelSvgs/Account.svg";
import DashboardSvg from "../../svgs/sidePanelSvgs/dashboard.svg";
import LeaderBoardSvg from "../../svgs/sidePanelSvgs/LeaderBoard.svg";
import ReportErrorSVG from "../../svgs/sidePanelSvgs/ReportError.svg";
import ViewMapSvg from "../../svgs/sidePanelSvgs/ViewMap.svg";

const SidePanel = () => {
  const sidebarLinksData = [
    {
      href: "/dashboard",
      svg: <DashboardSvg className=" w-2 sm:w-3 lg:w-4"/>,
      text: "Dashboard",
    },
    {
      href: "/report-error",
      svg: <ReportErrorSVG className=" w-2 sm:w-3 lg:w-4 border" />,
      text: "Report an Error",
    },
    {
      href: "/view-map",
      svg: <ViewMapSvg className="w-2 sm:w-3 lg:w-4" />,
      text: "View Map",
    },
    {
      href: "/leaderboard",
      svg: <LeaderBoardSvg className="w-2 sm:w-3 lg:w-4" />,
      text: "Leaderboard",
    },
    {
      href: "/account",
      svg: <Account className="w-2 sm:w-3 lg:w-4" />,
      text: "Account",
    },
  ];

  return (
    <>
      <div>
        <h1 className=" sm:ml-4 lg:ml-10 text-xs text-center sm:text-left sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-10 font-extrabold text-[#181C1E]">
          Farm Faults
        </h1>
        {sidebarLinksData.map((link, index) => (
          <SideBarLinks
            key={index}
            href={link.href}
            svg={link.svg}
            text={link.text}
          />
        ))}
      </div>
    </>
  );
};

export default SidePanel;
