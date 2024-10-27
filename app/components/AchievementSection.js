"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideData = [
  { id: 1, count: "200+", title: "WEDDINGS", subtitle: "ORGANIZED" },
  { id: 2, count: "150+", title: "EVENTS", subtitle: "HOSTED" },
  { id: 3, count: "300+", title: "PARTIES", subtitle: "CELEBRATED" }
];

const AchievementSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.99) {
          setIsLocked(true);
          document.body.style.overflow = "hidden";
        } else {
          setIsLocked(false);
          document.body.style.overflow = "auto";
        }
      },
      { threshold: [0, 0.99] }
    );

    if (sliderRef.current) observer.observe(sliderRef.current);

    return () => {
      document.body.style.overflow = "auto";
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  const handleWheel = (event) => {
    if (isTransitioning || !isLocked) return;

    setIsTransitioning(true);

    if (event.deltaY > 0 && currentSlide < slideData.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
      setScrollDirection("down");
    } else if (event.deltaY < 0 && currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
      setScrollDirection("up");
    } else if (event.deltaY > 0 && currentSlide === slideData.length - 1) {
      setIsLocked(false);
      document.body.style.overflow = "auto";
    } else if (event.deltaY < 0 && currentSlide === 0) {
      setIsLocked(false);
      document.body.style.overflow = "auto";
    }

    setTimeout(() => setIsTransitioning(false), 800);
    event.preventDefault();
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement && isLocked) {
      sliderElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSlide, isTransitioning, isLocked]);

  const getTransformStyle = () => {
    if (scrollDirection === "down") {
      return { transform: "translateX(-10%)" };
    } else if (scrollDirection === "up") {
      return { transform: "translateX(10%)" };
    }
    return {};
  };

  return (
    <section
      ref={sliderRef}
      className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Gradient Circles */}
      <div className="absolute inset-0 gradients-wrapper pointer-events-none">
        <div
          className="gradient-circle blue"
          style={{ top: "20%", left: "15%", ...getTransformStyle() }}
        ></div>
        <div
          className="gradient-circle pink"
          style={{ top: "40%", left: "25%", ...getTransformStyle() }}
        ></div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {slideData.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-8 ${
              index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Slide Content with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slideData[currentSlide].id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-center relative p-4 md:p-10 rounded-lg"
        >
          <p className="text-left text-white text-lg md:text-xl font-light">
            {slideData[currentSlide].count}
          </p>
          <h1 className="text-white text-5xl md:text-8xl font-bold">
            {slideData[currentSlide].title}
          </h1>
          <p className="text-white text-3xl md:text-6xl italic font-light">
            {slideData[currentSlide].subtitle}
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default AchievementSection;
