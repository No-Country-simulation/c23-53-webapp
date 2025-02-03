// import React from "react";
// import { pricingPlans } from "../resources/DataCards";
// import CheckMark from "@/app/common/assets/icons/CheckMark";

// export const CardsPricing = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-4">
//       {pricingPlans.map((plan) => (
//         <div
//           key={plan.id}
//           className="relative border border-[var(--border-primary)] w-[308px] h-auto p-6 rounded-xl overflow-hidden"
//         >
//           <div
//             className="absolute blur-[120px] left-3 bottom-[45%] w-36 h-36"
//             style={{
//               backgroundColor: plan.color.backgroundCard,
//             }}
//           />

//           <div className="relative z-10 mt-16">
//             <div className="flex flex-col gap-3">
//               <div className="flex gap-3">
//                 <div
//                   className="w-7 h-7 rounded-full flex items-center justify-center"
//                   style={{
//                     backgroundColor: plan.color.backgroundSvg,
//                   }}
//                 >
//                   <img src={plan.icon} className="w-4 h-4" />
//                 </div>
//                 <h2 className="text-[22px] font-bold text-text-secondary">
//                   {plan.title}
//                 </h2>
//               </div>
//               <p className="text-[32px] text-[#BBBBBB] font-bold">
//                 {plan.price}
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   className="w-[260px] h-[50px] px-4 py-2 text-[15px] rounded font-bold border border-[var(--border-primary)]"
//                   style={{
//                     backgroundColor: plan.color.button,
//                     color: plan.color.text,
//                   }}
//                 >
//                   {plan.buttonLabel}
//                 </button>
//               </div>
//             </div>

//             <ul className=" text-text-secondary my-16 gap-20">
//               {plan.description.map((item, index) => (
//                 <li key={index} className="flex items-center mb-5 text-[14px]">
//                   <div className="flex justify-start gap-2">
//                     <div className="flex mt-1">
//                    <CheckMark
//                    stroke={plan.color.checkMark}
//                    />
//                     </div>

//                     {item}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { pricingPlans } from "../resources/DataCards";
import CheckMark from "@/app/common/assets/icons/CheckMark";

export const CardsPricing = () => {
  const [isMounted, setIsMounted] = useState(false); // Nuevo estado
  const router = useRouter();

  // Asegúrate de que useRouter se ejecute solo en el cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSelectPlan = (plan: any) => {
    if (plan.price !== "Gratis") {
      router.push(`/pages/checkout?plan=${plan.id}`);
    }
  };

  // Retorna null o un loading state si aún no se ha montado
  if (!isMounted) {
    return null; // O un indicador de carga
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {pricingPlans.map((plan) => (
        <div
          key={plan.id}
          className="relative border border-[var(--border-primary)] w-[308px] h-auto p-6 rounded-xl overflow-hidden"
        >
          <div
            className="absolute blur-[120px] left-3 bottom-[45%] w-36 h-36"
            style={{
              backgroundColor: plan.color.backgroundCard,
            }}
          />

          <div className="relative z-10 mt-16">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: plan.color.backgroundSvg,
                  }}
                >
                  <img src={plan.icon} className="w-4 h-4" />
                </div>
                <h2 className="text-[22px] font-bold text-text-secondary">
                  {plan.title}
                </h2>
              </div>
              <p className="text-[32px] text-[#BBBBBB] font-bold">
                {plan.price}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className="w-[260px] h-[50px] px-4 py-2 text-[15px] rounded font-bold border border-[var(--border-primary)]"
                  style={{
                    backgroundColor: plan.color.button,
                    color: plan.color.text,
                  }}
                >
                  {plan.buttonLabel}
                </button>
              </div>
            </div>

            <ul className="text-text-secondary my-16 gap-20">
              {plan.description.map((item, index) => (
                <li key={index} className="flex items-center mb-5 text-[14px]">
                  <div className="flex justify-start gap-2">
                    <div className="flex mt-1">
                      <CheckMark stroke={plan.color.checkMark} />
                    </div>
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
