import React from "react";
import BackgroundHero from "@/components/Atoms/BackGrounds/BackGroundHero/BackGroundHero";
import { Button } from "@/components/Atoms/Button/Button";
import Link from "next/link";
import Img from "@/app/common/assets/img";


export const Hero = () => {
  return (
    <section className="w-full h-auto relative z-1">
      <div className="border border-[var(--border-primary)] h-[661px] mt-12 rounded-xl relative overflow-hidden">
        <BackgroundHero />
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col w-full items-center mt-10">
            <h1 className="text-[48px] font-bold text-[var(--text-color-secondary)]">
              Turn ideas into sleek interfaces!
            </h1>
            <p className="text-[16px] font-bold text-[var(--text-color-primary)]">
              Create beautiful and functional UIs faster with our customizable
              tools.
            </p>
          </div>
          <div className="w-full flex gap-4 justify-center">
            <Button color="#CAC8C8" textColor="#000000" fontSize="15px">
              <Link href="/">Get Started</Link>
            </Button>
            <Button color="#CAC8C8" textColor="#000000" fontSize="15px">
              <Link href="/">Go Premium</Link>
            </Button>
          </div>
        </div>
        <div className="">
          <div className="w-[804px] m-auto mt-14 p-2 bg-[#ffffff7e] rounded-xl ">
            <img src={Img.AllComponentsImg} alt="AllComponentsImg" className="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};