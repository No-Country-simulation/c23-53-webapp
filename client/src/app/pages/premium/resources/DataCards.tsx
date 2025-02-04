
import Icon from "@/app/common/assets/icons";

export const pricingPlans = [
  {
    id: "Free",
    title: "Free Plan",
    priceText: "$0 / month",
    price:"0",
    buttonLabel: "Start for free",
    description: [
      "Access to X basic components for quick building.",
      "Active Discord community: learn, share, and connect.",
      "Optimized code for React, Next.js, and Tailwind CSS.",
      "Total versatility: designed for a wide range of audiences.",
    ],
    icon: Icon.DiamonWhite,
    color: {
      backgroundCard: "#ffffff7c",
      backgroundSvg: "#1A1A1A",
      button: "#1A1A1A",
      text: "#FFFFFF",
      checkMark: "#ffffff7c",
    },
  },
  {
    id: "Premium",
    title: "Premium",
    priceText: "$50 / month",
    price:"50",
    buttonLabel: "Buy Now",
    description: [
      "Full access to our complete component library.",
      "Download packages to save time and keep your projects organized.",
      "Private communication channel for priority support and queries.",
      "Constant updates to keep you ahead of the curve.",
      "SEO-ready optimizations.",
    ],
    icon: Icon.DiamonWhite,
    color: {
      backgroundCard: "#2196F3",
      backgroundSvg: "#2196F3",
      button: "#2196F3",
      text: "#FFFFFF",
      checkMark: "#2196F3",
    },
  },
  {
    id: "Personalized",
    title: "Personalized",
    priceText: "$150 / month",
    price:"150",
    buttonLabel: "Buy Now",
    description: [
      "Customized components.",
      "Design + Development: all-in-one for a flawless result.",
      "Unlimited revisions.",
      "UX/UI audit.",
      "Live technical support.",
    ],
    icon: Icon.DiamonWhite,
    color: {
      backgroundCard: "#ff9d0081",
      backgroundSvg: "#FF9D00",
      button: "#FF9D00",
      text: "#FFFFFF",
      checkMark: "#FF9D00",
    },
  },
];

// {
//   id: "one-time",
//   title: "One Time Payment",
//   price: "$15 / month",
//   buttonLabel: "Buy Now",
//   description: [
//     "Access to premium components without a subscription.",
//     "Select a specific component and pay only for what you need.",
//     "Perfect for small projects that require an extra touch.",
//   ],
//   icon: Icon.DiamonBlack,
//   color: {
//     backgroundCard: "#50BB9B",
//     backgroundSvg: "#B2FDE6",
//     button: "#B2FDE6",
//     text: "#000000",
//     checkMark: "#B2FDE6",
//   },
// },