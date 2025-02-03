import Img from "@/app/common/assets/img";
import BackgroundGallery from "@/components/Atoms/BackGrounds/BackGroundGallery/BackgroundGallery";
import React from "react";

export const Gallery = () => {
  return (
    <section className="w-full h-auto my-28 md:mt-40 flex flex-col gap-10 relative">
       <BackgroundGallery />
      <div className="flex flex-col gap-4 text-center md:items-center">
        <h2 className=" text-[32px] w-[80%] m-auto md:full md:text-[40px] font-bold text-[var(--text-color-secondary)]">
          Design Smarter, Build Faster
        </h2>

        <p className=" text-[14px] md:text-[16px] font-bold text-[var(--text-color-primary)]">
          Empower your creativity with ready-to-use tools that bring your ideas
          to life effortlessly.
        </p>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="flex justify-center items-center">
          <div className="p-2 bg-[#0a2d497e] rounded-xl">
            <img src={Img.Component_1} alt="" className="rounded-xl" />
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="flex justify-center items-center">
            <div className="p-2 bg-[#0a2d497e] rounded-xl">
              <img src={Img.Component_2} alt="" className="rounded-xl" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-2 bg-[#0a2d497e] rounded-xl">
              <img src={Img.Component_3} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
        <div className="flex justify-center items-center">
            <div className="p-2 bg-[#4296af4d] rounded-xl">
              <img src={Img.Component_4} alt="" className="rounded-xl" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-2 bg-[#0a2d497e] rounded-xl">
              <img src={Img.Component_5} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
