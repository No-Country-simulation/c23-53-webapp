
"use client";
import React, { ReactNode } from "react";
import "./button.css"; 

interface ButtonProps {
  className?: string;
  textColor?:string;
  text?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: "300" | "400" | "500" | "600" | "700";
  border?:string;
  backgroundColor?: string;
  children?: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary-outline" | "danger" | "success" | "off";
}

export const Button: React.FC<ButtonProps> = ({
  text,
  padding = "10px 22px",
  textColor,
  fontSize = "16px",
  fontWeight = "700",
  border,
  children,
  backgroundColor,
  onClick,
  variant = "primary",
  className = "",
}) => {
  return (
    <button
      className={`button ${variant} ${className}`} 
      style={{
        fontWeight,
        padding,
        fontSize,
        border,
        color:textColor,
        backgroundColor,
      }}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
};

