"use client";
import { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint at 768px
    };
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Listen for resize events
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative flex w-full h-screen items-center bg-black text-white overflow-hidden">
      {/* Overlay Text and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-8xl font-bold mb-8 text-center">LIVE EVENTS</h1>
        <button className="text-2xl border-2 border-white text-white font-semibold py-2 px-4 rounded-lg w-60">
          Explore Now
        </button>
      </div>

      {/* Image Columns - render only on non-mobile */}
      {!isMobile && (
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0 z-0">

        <div className="space-y-4 h-full flex flex-col">
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

        <div className="space-y-4 h-full flex flex-col">
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
          <div className="space-y-4 h-full flex flex-col">
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
       )}
      {isMobile && (
        <div className="w-full h-full flex px-4 md:px-0 space-x-4 z-0">
           <div className="space-y-4 h-full flex flex-col">
          {imageData.slice(0, 4).map((src, index) => (
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

        <div className="space-y-4 h-full flex flex-col">
          {imageData.slice(4, 8).map((src, index) => (
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
      )}
    </section>
  );
}
