import React from "react";
import BackgroundHero from "@/components/Atoms/BackGrounds/BackGroundHero/BackGroundHero";
import { Button } from "@/components/Atoms/Button/Button";
import Link from "next/link";
import Img from "@/app/common/assets/img";

export const Hero = () => {
  return (
    <section className="w-full h-auto relative ">
      <div className="border border-[var(--border-primary)] flex flex-col justify-center h-[450px] md:justify-between md:h-[661px] mt-8 md:mt-12 rounded-xl relative overflow-hidden p-8 md:p-10 z-1 ">
        <BackgroundHero />
        <div className="w-full flex flex-col gap-10 md:gap-10">
          <div className="flex flex-col w-full items-center mt-8 md:mt-10 text-center">
            <h1 className="text-[32px] md:text-[48px] font-bold text-[var(--text-color-secondary)] leading-tight">
              Turn ideas into sleek interfaces!
            </h1>
            <p className="text-[14px] md:text-[16px] font-bold text-[var(--text-color-primary)]">
              Create beautiful and functional UIs faster with our customizable tools.
            </p>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button fontSize="14px"  backgroundColor="black" fontWeight="700" textColor="white">
              <Link href="/pages/docs">Get Started</Link>
            </Button>
            <Button textColor="black" backgroundColor="white" fontSize="14px"  fontWeight="700">
              <Link href="/pages/premium">Go Premium</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-full max-w-[600px] md:max-w-[804px] m-auto mt-12 p-2 bg-[#ffffff7e] rounded-xl">
            <img src={Img.AllComponentsImg} alt="AllComponentsImg" className="rounded-xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
