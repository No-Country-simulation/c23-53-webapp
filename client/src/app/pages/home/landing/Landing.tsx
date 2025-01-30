"use client";
import React, { useState } from "react";
import { Hero } from "../components/Hero/Hero";
import { Gallery } from "../components/Galllery/Gallery";
import { CardPremium } from "../components/CardPremium/CardPremium";
import { Footer } from "@/components/Footer/Footer";
import { Modal } from "@/components/cultureui/modal/Modal";

export const Landing = () => {
  return (
    <div className="">
      <Hero/>
      <Gallery />
      <CardPremium/>
      <Footer />
      <div>
        {/* <div className="flex justify-center">
          
          <Modal
            title="Subscribe to our Newsletter"
            imageSrc="https://cdn0.geoenciclopedia.com/es/posts/8/0/0/montanas_8_orig.jpg"
            button="Submit"
            onSubmit={(email) => console.log("Email recibido:", email)}
            backgroundColor="#000"
            textColor="#fafafa"
            titleSize="24px"
            descriptionSize="12px"
            fontWeight="600"
            border="1px solid #ffffff15"
            successMessageBg="#fafafa"
            successMessageText="#000"
            inputPlaceholder="Enter your email"
            
            
            
          />
        </div> */}
      </div>
    </div>
  );
};
