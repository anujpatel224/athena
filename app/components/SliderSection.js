"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const slideData = [
  { id: 1, count: "200+", title: "WEDDINGS", subtitle: "ORGANIZED" },
  { id: 2, count: "150+", title: "EVENTS", subtitle: "HOSTED" },
  { id: 3, count: "300+", title: "PARTIES", subtitle: "CELEBRATED" },
  { id: 4, count: "400+", title: "DIWALI", subtitle: "ENJOY" },
  { id: 5, count: "500+", title: "HOLI", subtitle: "FUNSSS" },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.overflow = "hidden"; 
        } else {
          document.body.style.overflow = "auto"; 
        }
      },
      { threshold: 1.0 } 
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
      document.body.style.overflow = "auto"; 
    };
  }, []);

  const handleWheel = (event) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    if (event.deltaY > 0) {
      // Scrolling down
      if (currentSlide < slideData.length - 1) {
        // Move to the next slide if not on the last slide
        setCurrentSlide((prevSlide) => prevSlide + 1);
      } else {
        // Enable page scroll after the last slide
        document.body.style.overflow = "auto";
      }
    } else if (event.deltaY < 0) {
      // Scrolling up, move to the previous slide if not on the first slide
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
    }

    setTimeout(() => setIsTransitioning(false), 800);
    event.preventDefault();
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSlide, isTransitioning]);

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Left Lines */}
      <div className="sm:flex hidden absolute left-10 h-24 flex flex-col justify-between">
        {slideData.map((_, index) => (
          <div
            key={index}
            className={`w-0.5 h-10 mb-2 ${
              index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Slide Content */}
      <motion.div
        className="text-center"
        key={slideData[currentSlide].id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-left text-white text-md font-light">
          {slideData[currentSlide].count}
        </p>
        <h1 className="text-white text-7xl font-bold">
          {slideData[currentSlide].title}
        </h1>
        <p className="text-white text-5xl italic font-light">
          {slideData[currentSlide].subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default SliderSection;
