import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { verifyApiCall } from "../../apis/auth.api";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [sidebarLinksData, setSidebarLinksData] = useState(data);

  // Function to verify login status
  async function verifyLogin() {
    const res = await verifyApiCall();
    if (res.success) {
      setIsVerified(true); // Update the state for verification
      setSidebarLinksData((prev) => {
        const updatedLinks = [
          ...prev.slice(0, 1),
          { href: "/leaderboard", text: "Leader board" },
          ...prev.slice(1),
        ];
        return updatedLinks;
      });
    }
  }

  useEffect(() => {
    verifyLogin();
  }, []);

  // Toggling mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Generate the first 3 or 4 links for larger screens
  const firstLinks = isVerified
    ? [
        { href: "/", text: "Home" },
        { href: "/leaderboard", text: "Leader board" },
        { href: "#work", text: "How It Works" },
        { href: "/contact", text: "Contact" },
      ]
    : data.slice(0, 3); // Only show 3 links if not verified

  return (
    <nav className="flex sm:justify-evenly items-center py-1 sm:py-6 px-5 sm:px-0">
      <Link
        to="/dashboard"
        className="font-extrabold text-[25px] sm:text-3xl lg:heading-lg"
      >
        Farm Faults
      </Link>
      <div className="sm:hidden absolute right-0">
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#181C1E" />
      </div>
      {/* For large screens */}
      <ul className="hidden sm:flex gap-2 sm:gap-7 xl:gap-10 p-3 text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-lg">
        {firstLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="flex items-center sm:space-x-2 text-[#181C1E]"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* For mobile menu */}
      {isOpen && (
        <div className="absolute top-[50px] left-0 w-full bg-secondary shadow-lg block sm:hidden z-10">
          <ul className="flex flex-col items-center gap-4 py-8">
            {sidebarLinksData.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#181C1E] text-2xl text-left"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="hidden sm:block sm:space-x-4 lg:space-x-6 xl:space-x-10 text-[7px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base">
        <Link
          to="/signin"
          className="p-1 sm:px-3 md:px-4 lg:px-7 sm:py-2 border-[#181C1E] rounded-md md:rounded-xl lg:rounded-3xl border"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="p-1 sm:px-3 md:px-4 lg:px-7 sm:py-2 text-white bg-[#181C1E] opacity-80 rounded-md md:rounded-xl lg:rounded-3xl"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

const data = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "#work",
    text: "How It Works",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/signin",
    text: "Sign in",
  },
  {
    href: "/signup",
    text: "Get Started",
  },
];
