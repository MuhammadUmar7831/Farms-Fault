import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  const sidebarLinksData = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/leaderboard",
      text: "Leader board",
    },
    {
      href: "#work",
      text: "How It Works",
    },
    {
      href: "/",
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

  const firstFourLinks = sidebarLinksData.slice(0, 4);

  return (
    <nav className=' flex  sm:justify-evenly items-center py-1  sm:py-6 px-5 sm:px-0'>
        <h1 className='font-extrabold text-[25px] sm:text-3xl lg:heading-lg'>Farm Faults</h1>
        <div className="sm:hidden absolute right-0">
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#181C1E" />
      </div>
      <ul className=" opacity-0 sm:opacity-100  sm:flex gap-2 sm:gap-7 xl:gap-10 p-3 text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-lg">
        {firstFourLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className={({ isActive }) =>
                `flex items-center sm:space-x-2 ${isActive ? 'text-green-400' : 'text-[#181C1E]'}`
              }
            >
              {link.svg}
              <span>{link.text}</span>
            </a>
          </li>
        ))}
              </ul>

           {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-secondary shadow-lg sm:hidden">
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
      <div className=' opacity-0 sm:opacity-100 sm:space-x-4 lg:space-x-6 xl:space-x-10 text-[7px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base'>
        <Link to="/signin" className=' p-1 sm:px-3 md:px-4 lg:px-7 sm:py-2 border-[#181C1E] rounded-md md:rounded-xl lg:rounded-3xl border'>Login</Link>
        <Link to="/signup" className=' p-1 sm:px-3 md:px-4 lg:px-7 sm:py-2 text-white bg-[#181C1E] opacity-80 rounded-md md:rounded-xl lg:rounded-3xl'>Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
