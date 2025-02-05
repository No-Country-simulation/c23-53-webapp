import React from "react";
import "./backgroundcardp.css";

const BackgroundCardP: React.FC = () => {
  return (
    <div className="background-container z-10">
      <div className="blur-bg">
        <div className="blur-circle circle-1-p"></div>
        <div className="blur-circle circle-2-p"></div>
      </div>
    </div>
  );
};

export default BackgroundCardP;
