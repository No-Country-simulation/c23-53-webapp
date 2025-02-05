"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { Button } from "../Atoms/Button/Button";
import { navLinks } from "./resources/DataLinks";
import LogoCulture from "@/app/common/assets/icons/LogoCulture";
import { useAuth } from "@/app/hooks/useAuth";
import Img from "@/app/common/assets/img";
import { LogOut } from "lucide-react";















const LOGIN_URL =
  "https://c23-53-webapp-production.up.railway.app/api/v1/auth/login";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { accessToken, logout, user } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-[var(--border-primary)] w-full h-auto z-50 relative">
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
            <Button
              onClick={() => (window.location.href = LOGIN_URL)}
              backgroundColor="white"
              textColor="#000000"
              fontSize="15px"
            >
              Log in
            </Button>
          ) : (
            accessToken &&
            user && (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 group"
                >
                  <img
                    src={Img.Perro}
                    alt="User profile"
                    className="w-8 h-8 rounded-full object-cover border-2  border-b-blue-200 transition-transform duration-200 group-hover:scale-105"
                  />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 top-12 bg-[#0A0A0A] border border-[var(--border-primary)] rounded-lg shadow-xl w-[256px] p-2 animate-slide-down">
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center py-3 px-2 gap-3">
                        <img
                          src={Img.Perro}
                          alt="User profile"
                          className="w-7 h-7 rounded-full object-cover border"
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold text-[14px] text-[var(--text-color-secondary)] truncate">
                            {user.name}
                          </p>
                          <p className="text-[14px] font-semibold text-[var(--text-color-primary)] truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex flex-col border-y border-[var(--border-primary)] mt-2 py-2 gap-1">
                        <div className="flex flex-col">
                          {navLinks.map((link, index) => (
                            <Link
                              key={index}
                              href={link.href}
                              className="font-semibold text-[14px] text-[var(--text-color-primary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-secondary)]"
                            >
                              <div
                                key={index}
                                className="hover:bg-[#ffffff0f] py-2 px-2 rounded-md"
                              >
                                {link.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center">
                      <div className="hover:bg-[#ffffff0f] rounded-md py-2 px-2 w-full">
                        <button
                          onClick={logout}
                          className="flex justify-between items-center w-full font-semibold text-[14px] text-[var(--text-color-primary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-secondary)]"
                        >
                          Log out
                          <LogOut stroke="#b8b4b4" width={16} height={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          backgroundColor="transparent"
          className="lg:hidden flex items-center text-[var(--text-color-secondary)]"
        >
          <AlignJustify stroke="white" />
        </Button>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[70px] left-0 w-full bg-black p-2 shadow-lg z-50">
            <div className="flex flex-col gap-4">
              {user && (
                <div className="flex items-center justify-between px-2 gap-3 mb-4">
                  <div className="flex flex-col">
                    <p className="font-semibold text-[14px] text-[var(--text-color-secondary)] truncate">
                      {user.name}
                    </p>
                    <p className="text-[14px] font-semibold text-[var(--text-color-primary)] truncate">
                      {user.email}
                    </p>
                  </div>
                  <img
                    src={Img.Perro}
                    alt="User profile"
                    className="w-6 h-6 rounded-full object-cover border"
                  />
                </div>
              )}

              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="font-semibold text-[14px] text-[var(--text-color-primary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-secondary)]"
                >
                  <div
                    key={index}
                    className="hover:bg-[#ffffff0f] py-2 px-2 rounded-md"
                  >
                    {link.label}
                  </div>
                </Link>
              ))}

              {!accessToken ? (
                <Button
                  backgroundColor="white"
                  onClick={() => (window.location.href = LOGIN_URL)}
                  textColor="#000000"
                  fontSize="15px"
                >
                  Log in
                </Button>
              ) : (
                <div className="my-3 flex items-center">
                  <div className="bg-white rounded-md py-2 px-2 w-full">
                    <button
                      onClick={logout}
                      className="flex justify-between items-center w-full font-semibold text-[14px] text-black"
                    >
                      Log out
                      <LogOut stroke="black" width={16} height={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
