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

const AchievementSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSlide(0); // Reset to the first slide when the component is in view
          setIsLocked(true);  // Lock scroll within the section
        } else {
          setIsLocked(false); // Unlock scroll when out of section
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const handleWheel = (event) => {
    if (isTransitioning) return; // Prevent new scroll action if transitioning

    const atFirstSlide = currentSlide === 0;
    const atLastSlide = currentSlide === slideData.length - 1;

    if (!isLocked) return; // Allow normal scrolling when out of the section

    // Scroll down
    if (event.deltaY > 0) {
      if (atLastSlide) {
        setIsLocked(false); // Unlock scroll to leave the section on the last slide
      } else {
        setIsTransitioning(true);
        setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, slideData.length - 1));
      }
    }
    // Scroll up
    else if (event.deltaY < 0) {
      if (atFirstSlide) {
        setIsLocked(false); // Unlock scroll to leave the section on the first slide
      } else {
        setIsTransitioning(true);
        setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
      }
    }

    setTimeout(() => setIsTransitioning(false), 800);
    event.preventDefault(); // Prevent default scroll
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSlide, isLocked, isTransitioning]);

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      {/* Left Lines */}
      <div className="absolute left-10 h-24 flex flex-col justify-between">
        <div className="w-0.5 h-10 bg-white opacity-50" />
        <div className="w-0.5 h-10 bg-white opacity-50" />
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
        <p className="text-white text-sm font-light">
          {slideData[currentSlide].count}
        </p>
        <h1 className="text-white text-6xl font-bold">
          {slideData[currentSlide].title}
        </h1>
        <p className="text-white text-4xl italic font-light">
          {slideData[currentSlide].subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default AchievementSection;
