
"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './carrusel.css';

interface SlideItem {
  image?: string;
  title?: string;
  description?: string;
}

interface SlideData {
  data: SlideItem[];
  titleColor?: string;
  titleWeight?: string;
  descColor?: string;
  descWeight?: string;
  titleSize?: string;
  descSize?: string;
  chevronColor?: string;
  buttonBgColor?: string;
}

const Carousel: React.FC<SlideData> = ({
  data,
  titleColor = '#fff',
  titleWeight = 'semibold',
  descColor = '#808080',
  descWeight = 'semibold',
  titleSize = '24px',
  buttonBgColor = '#fff',
  chevronColor = '#000',
  descSize = '14px',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No hay elementos en el carrusel.</p>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentSlide = data[currentIndex];

  return (
    <div className='flex justify-center items-center gap-5 h-auto'>
      <div className='w-auto flex flex-col items-center gap-4'>
        <div className='carousel'>
          <motion.div
            className='carousel-content'
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            {currentSlide.image && <img src={currentSlide.image} alt={`Slide ${currentIndex}`} />}
            <div className='text-overlay flex flex-col'>
              <h3 style={{ color: titleColor, fontWeight: titleWeight, fontSize: titleSize }}>
                {currentSlide.title}
              </h3>
              <p style={{ color: descColor, fontWeight: descWeight, fontSize: descSize }}>
                {currentSlide.description}
              </p>
            </div>
          </motion.div>
        </div>
        <div className='flex justify-center gap-10 w-auto h-full items-center'>
          <button className='carousel-button prev' onClick={prevSlide} style={{ backgroundColor: buttonBgColor }}>
            <ChevronLeft size={24} color={chevronColor} />
          </button>
          <button className='carousel-button next' onClick={nextSlide} style={{ backgroundColor: buttonBgColor }}>
            <ChevronRight size={24} color={chevronColor} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;


// const slides = [
//   {
//     image: 'https://images.unsplash.com/photo-1628863360351-37a9bd7da25d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Bienvenido',
//     description: 'Este es el primer slide',
    
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1616715278831-ccfd09ddacba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Descubre más',
//     description: 'Explora nuevas experiencias',
  
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1633530733539-b19ca9b05fb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Descubre más',
//     description: 'Explora nuevas experiencias',
//   }

// ];