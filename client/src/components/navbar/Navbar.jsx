import React from 'react';
import { NavLink } from 'react-router-dom';
import Account from "../../svgs/sidePanelSvgs/Account.svg";
import DashboardSvg from "../../svgs/sidePanelSvgs/dashboard.svg";
import LeaderBoardSvg from "../../svgs/sidePanelSvgs/LeaderBoard.svg";
import ReportErrorSVG from "../../svgs/sidePanelSvgs/ReportError.svg";
import ViewMapSvg from "../../svgs/sidePanelSvgs/ViewMap.svg";

const Navbar = () => {
  const sidebarLinksData = [
    {
      href: "/dashboard",
      svg: <DashboardSvg className="w-2" />,
      text: "Dashboard",
    },
    {
      href: "/reportError",
      svg: <ReportErrorSVG className="w-2" />,
      text: "Report an Error",
    },
    {
      href: "/viewMap",
      svg: <ViewMapSvg className="w-2" />,
      text: "View Map",
    },
    {
      href: "/leaderboard",
      svg: <LeaderBoardSvg className="w-2" />,
      text: "Leaderboard",
    },
    {
      href: "/account",
      svg: <Account className="w-2" />,
      text: "Account",
    },
  ];

  return (
    <nav>
      <ul className="flex gap-4 p-3 text-[10px]">
        {sidebarLinksData.map((link, index) => (
          <li key={index}>
            <NavLink 
              to={link.href}
              className={({ isActive }) =>
                `flex items-center space-x-2 ${isActive ? 'text-green-400' : 'text-[#181C1E]'}`
              }
            >
              {link.svg}
              <span>{link.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
