import React from "react";
import BackgroundCardP from "@/components/Atoms/BackGrounds/BackGroundCardP/BackGroundCardP";
import { Button } from "@/components/Atoms/Button/Button";
import Link from "next/link";

export const CardPremium = () => {
  return (
    <div className="w-auto h-auto mb-20">
      <div className="border border-[var(--border-primary)] h-[557px] mt-12 rounded-xl relative overflow-hidden px-10 md:px-20">
        <BackgroundCardP />

        <div className="relative z-10 h-full flex ">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left lg:w-[40%] gap-5">
            <h2 className="text-[40px] font-bold text-[var(--text-color-secondary)]">
              Go Premium
            </h2>
            <p className="  text-[14px] w-full  md:text-[14px] font-bold text-[var(--text-color-primary)] md:w-[75%]">
              Choose the plan that fits your needs. Start for free with
              essential components, or go premium to unlock a complete set of
              advanced tools designed to elevate your projects to the next level
            </p>
            <div>
              <Button
                textColor="black"
                backgroundColor="white"
                fontSize="14px"
                padding="12px 30px"
                fontWeight="700"
              >
                <Link href="/">Get Premium</Link>
              </Button>
            </div>
          </div>
          <div className=" hidden lg:flex w-[60%] gap-5 items-end justify-center">
            <div className="border border-[var(--border-primary)] bg-black border-b-0 w-[283px] h-[358px] rounded-lg relative overflow-hidden">
              <div className="absolute blur-[100px] bg-[#0a2d497a] bottom-[-150px] w-40 h-40" />
              <div className="w-full flex justify-center p-8 text-center">
                <h3 className="text-[16px] font-bold text-[var(--text-color-secondary)] ">
                  Get Started for Free
                </h3>
              </div>
            </div>
            <div className="border border-[var(--border-primary)] bg-black border-b-0 w-[283px] h-[475px] rounded-lg relative overflow-hidden">
              <div className="absolute blur-[100px] bg-[#46321098] bottom-1 w-40 h-40" />
              <div className="w-full flex justify-centerm p-8 text-center">
                <h3 className="text-[16px] font-bold text-[var(--text-color-secondary)] ">
                  Unlock the Premium Experience
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
