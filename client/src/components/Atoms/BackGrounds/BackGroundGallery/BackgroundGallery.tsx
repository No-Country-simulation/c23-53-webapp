import React from 'react';
import "./backgroundgallery.css"; 

const BackgroundGallery: React.FC = () => {
  return (
    <div className="background-container">  
      <div className="blur-bg">
        <div className="blur-circle-g circle-1-g"></div>
        <div className="blur-circle-g circle-2-g"></div>
        <div className="blur-circle-g circle-3-g"></div>
        <div className="blur-circle-g circle-4-g"></div>
        <div className="blur-circle-g circle-5-g"></div>
        <div className="blur-circle-g circle-6-g"></div>

      </div>
    </div>
  );
};

export default BackgroundGallery;
