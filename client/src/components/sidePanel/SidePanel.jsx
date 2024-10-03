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
      svg: <DashboardSvg />,
      text: "Dashboard",
      containerClass: "mt-10 w-fit ml-10",
      linkClass: "flex items-center gap-3",
      textClass: "text-2xl",
    },
    {
      href: "/reportError",
      svg: <ReportErrorSVG />,
      text: "Report an Error",
      containerClass: "mt-10 w-fit ml-10",
      linkClass: "flex items-center gap-3",
      textClass: "text-2xl",
    },
    {
      href: "/viewMap",
      svg: <ViewMapSvg />,
      text: "View Map",
      containerClass: "mt-10 w-fit ml-10",
      linkClass: "flex items-center gap-3",
      textClass: "text-2xl",
    },
    {
      href: "/leaderboard",
      svg: <LeaderBoardSvg />,
      text: "Leaderboard",
      containerClass: "mt-10 w-fit ml-10",
      linkClass: "flex items-center gap-3",
      textClass: "text-2xl",
    },
    {
      href: "/account",
      svg: <Account />,
      text: "Account",
      containerClass: "mt-10 border-2 w-fit ml-10",
      linkClass: "flex items-center gap-3",
      textClass: "text-2xl",
    },
  ];

  return (
    <>
      <div>
        <h1 className=" text-center text-3xl mt-10 font-extrabold">
          Farm Faults
        </h1>
        {sidebarLinksData.map((link, index) => (
          <SideBarLinks
            key={index}
            href={link.href}
            svg={link.svg}
            text={link.text}
            containerClass={link.containerClass}
            linkClass={link.linkClass}
            textClass={link.textClass}
          />
        ))}
      </div>
    </>
  );
};

export default SidePanel;
