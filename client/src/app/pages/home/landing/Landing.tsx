"use client";
import React, { useState } from "react";
import { Hero } from "../components/Hero/Hero";
import { Gallery } from "../components/Galllery/Gallery";
import { CardPremium } from "../components/CardPremium/CardPremium";
import { Footer } from "@/components/Footer/Footer";


export const Landing = () => {

 


  return (
    <>
      <Hero/>
      <Gallery />
      <CardPremium/>
      <Footer />
    </>
  );
};
