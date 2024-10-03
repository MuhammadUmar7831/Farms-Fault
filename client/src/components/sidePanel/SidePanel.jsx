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
      svg: <DashboardSvg className=" w-3 lg:w-4"/>,
      text: "Dashboard",
    },
    {
      href: "/reportError",
      svg: <ReportErrorSVG className=" w-3 lg:w-4" />,
      text: "Report an Error",
    },
    {
      href: "/viewMap",
      svg: <ViewMapSvg className=" w-3 lg:w-4" />,
      text: "View Map",
    },
    {
      href: "/leaderboard",
      svg: <LeaderBoardSvg className=" w-3 lg:w-4" />,
      text: "Leaderboard",
    },
    {
      href: "/account",
      svg: <Account className=" w-3 lg:w-4" />,
      text: "Account",
    },
  ];

  return (
    <>
      <div>
        <h1 className=" ml-4 lg:ml-10 text-xl lg:text-2xl xl:text-3xl mt-10 font-extrabold">
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
