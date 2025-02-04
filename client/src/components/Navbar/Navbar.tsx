

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../Atoms/Button/Button";
import { navLinks } from "./resources/DataLinks";
import LogoCulture from "@/app/common/assets/icons/LogoCulture";
import { useAuth } from "@/app/hooks/useAuth";

const LOGIN_URL = "https://c23-53-webapp-production.up.railway.app/api/v1/auth/login";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { accessToken, logout } = useAuth();
 

  return (
    <div className="border-b border-[var(--border-primary)] w-full h-auto">
      <nav className="flex justify-between items-center w-full py-6">
        <div className="flex gap-14">
          <div className="flex items-center gap-3 text-[var(--text-color-secondary)] font-bold text-[24px]">
            <LogoCulture />
            <h2>Culture UI</h2>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-[14px]">
            {navLinks.map((link, index) => (
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
          {!accessToken ? (
            <Button onClick={() => (window.location.href = LOGIN_URL)} backgroundColor="white" textColor="#000000" fontSize="15px">
              Log in
            </Button>
          ) : (
            <Button onClick={logout} backgroundColor="black" textColor="#fff" fontSize="15px" border="1px solid #ffffff15">
              Log out
            </Button>
          )}
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden flex items-center text-[var(--text-color-secondary)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[70px] left-0 w-full bg-black p-4 shadow-lg z-50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="font-normal text-[var(--text-color-secondary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-primary)]"
                >
                  {link.label}
                </Link>
              ))}
              {!accessToken ? (
                <Button backgroundColor="white" onClick={() => (window.location.href = LOGIN_URL)} textColor="#000000" fontSize="15px">
                  Log in
                </Button>
              ) : (
                <Button onClick={logout} backgroundColor="black" textColor="#fff" fontSize="15px" border="1px solid #ffffff15">
                  Log out
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
