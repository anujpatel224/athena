"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const imageData = [
  "/images/liveevents/live-event-img1.jpg",
  "/images/liveevents/live-event-img2.jpg",
  "/images/liveevents/live-event-img3.jpg",
  "/images/liveevents/live-event-img1.jpg",
  "/images/liveevents/live-event-img2.jpg",
  "/images/liveevents/live-event-img3.jpg",
  "/images/liveevents/live-event-img1.jpg",
  "/images/liveevents/live-event-img2.jpg",
  "/images/liveevents/live-event-img3.jpg",
];

export default function LiveEvents() {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const columnTransform = (column) => {
    if (scrollDirection === 'down') {
      return column === 'middle' ? 'translate-y-4' : '-translate-y-4';
    } else {
      return column === 'middle' ? '-translate-y-4' : 'translate-y-4';
    }
  };

  return (
    <section className="relative flex w-full h-screen items-center bg-black text-white overflow-hidden">
      {/* Overlay Text and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-8xl font-bold mb-8 text-center">LIVE EVENTS</h1>
        <button className="text-2xl border-2 border-white text-white font-semibold py-2 px-4 rounded-lg w-60">
          Explore Now
        </button>
      </div>

      {/* Image Grid */}
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0 z-0 bg-black opacity-50">
        {/* Column 1 */}
        <div className={`space-y-4 h-full flex flex-col transition-transform duration-300 transform ${columnTransform('left')}`}>
          {imageData.slice(0, 3).map((src, index) => (
            <Image 
              key={index} 
              src={src} 
              alt={`image ${index + 1}`} 
              className="w-full object-cover flex-1" 
              width={400} 
              height={300} 
              layout="responsive"
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className={`space-y-4 h-full flex flex-col transition-transform duration-300 transform ${columnTransform('middle')}`}>
          {imageData.slice(3, 6).map((src, index) => (
            <Image 
              key={index} 
              src={src} 
              alt={`image ${index + 1}`} 
              className="w-full object-cover flex-1" 
              width={400} 
              height={300} 
              layout="responsive"
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className={`space-y-4 h-full flex flex-col transition-transform duration-300 transform ${columnTransform('right')}`}>
          {imageData.slice(6, 9).map((src, index) => (
            <Image 
              key={index} 
              src={src} 
              alt={`image ${index + 1}`} 
              className="w-full object-cover flex-1" 
              width={400} 
              height={300} 
              layout="responsive"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
