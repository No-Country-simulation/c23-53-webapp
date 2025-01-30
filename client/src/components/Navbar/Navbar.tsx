// import React from 'react'
// import Link from 'next/link'
// import { Button } from '../Atoms/Button/Button';
// import { navLinksDesktop } from './resources/DataLinks';


// export const Navbar = () => {
//   return (
//     <div className="border-b border-[var(--border-primary)] w-full h-auto mt-2 p-4">
//       <nav className="flex justify-between items-center w-full h-[100%] py-[24px] ">
//         <div className="w-[70%] flex items-center gap-52">
//           <div>
//             <h2 className="text-[var(--text-color-secondary)] font-bold text-2xl">Culture UI</h2>
//           </div>
//           <div className="flex gap-9 ml-6 text-base">
//             {navLinksDesktop.map((link, index) => (
//               <Link key={index} href={link.href} className="font-normal text-[var(--text-color-secondary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-primary)]">
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className="text-white flex justify-end gap-4 w-[30%]">
//           <Button
//           color='#CAC8C8'
//           textColor='#000000'
//           fontSize='15px'
//           >
//             <Link href="/">Log in</Link>
//           </Button>
         
//         </div>
//       </nav>
//     </div>
//   );
// };
"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../Atoms/Button/Button";
import { navLinksDesktop } from "./resources/DataLinks";
import LogoCulture from "@/app/common/assets/icons/LogoCulture";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b border-[var(--border-primary)] w-full h-auto">
      <nav className="flex justify-between items-center w-full py-6">
       
        <div className="flex gap-14">
        <div className="flex items-center gap-3 text-[var(--text-color-secondary)] font-bold text-[24px]">
          <LogoCulture/>
          <h2>Culture UI</h2>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-[14px]">
          {navLinksDesktop.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-semibold text-[var(--text-color-secondary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        </div>

       
        <div className="hidden lg:flex">
          <Button backgroundColor="white"textColor="#000000" fontSize="15px">
            <Link href="/">Log in</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center text-[var(--text-color-secondary)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[70px] left-0 w-full bg-black p-4 shadow-lg z-50">
            <div className="flex flex-col gap-4">
              {navLinksDesktop.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="font-normal text-[var(--text-color-secondary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-primary)]"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                backgroundColor="white"
                textColor="#000000"
                fontSize="15px"
              >
                <Link href="/">Log in</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

