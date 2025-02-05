
"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import BackgroundGallery from "@/components/Atoms/BackGrounds/BackGroundGallery/BackgroundGallery";
import Paypal from "@/app/common/assets/icons/Paypal";



const Checkout = () => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const price = searchParams.get("price");
  
 
  
  const planColors: Record<string, string> = {
    Premium: "bg-[#2196F3]", 
    Personalized: "bg-[#FF9D00]", 
  };

  return (
    <div className="flex flex-col h-auto max-w-[800px] m-auto px-4 relative mt-10">
      <BackgroundGallery />
      <div className="flex justify-center mt-16">
        <h1 className="text-[40px] font-bold text-[var(--text-color-secondary)]">
          Order
        </h1>
      </div>
      <div>
        <div className="flex flex-col items-start mt-10 gap-4">
          <h3 className="text-[32px] font-bold text-[var(--text-color-secondary)]">
            {price},00 US$
          </h3>
          {plan && planColors[plan] && (
            <p
              className={`text-[14px] font-bold text-white px-3 py-1 rounded-md ${planColors[plan]}`}
            >
              Culture UI {plan} Plan
            </p>
          )}
        </div>
        <div className="border-y border-[var(--border-primary)] flex flex-col py-5 mt-10 gap-20">
          <div className="flex justify-between">
            <p className="text-[16px] font-bold text-[var(--text-color-secondary)]">
              Subtotal
            </p>
            <p className="text-[20px] font-bold text-[var(--text-color-primary)]">
              {price},00 US$
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[16px] font-bold text-[var(--text-color-secondary)]">
              IVA
            </p>
            <p className="text-[20px] font-bold text-[var(--text-color-primary)]">
              00,00 US$
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <p className="text-[20px] font-bold text-[var(--text-color-secondary)]">
            Total
          </p>
          <p className="text-[20px] font-bold text-[var(--text-color-primary)]">
            {price},00 US$
          </p>
        </div>
        <div className="flex my-16">
          <button className="w-full h-[75px] flex justify-center items-center border border-[var(--border-primary)] bg-black rounded-lg">
            <Paypal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
