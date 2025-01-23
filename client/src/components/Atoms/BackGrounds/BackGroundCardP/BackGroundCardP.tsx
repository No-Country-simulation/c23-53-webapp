import React from "react";
import "./backgroundcardp.css";

const BackgroundCardP: React.FC = () => {
  return (
    <div className="background-container">
      <div className="blur-bg">
        <div className="blur-circle circle-1"></div>
        <div className="blur-circle circle-2"></div>
      </div>
    </div>
  );
};

export default BackgroundCardP;
