"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

import anna_desk from "../../public/anna-desk.png";
import testimonial2 from "../../public/testimonial2.png";
import testimonial3 from "../../public/testimonial3.png";


const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLeftHalf, setIsLeftHalf] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const testimonialDivRef = useRef(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      image: anna_desk,
      alt: "Testimonial 2",
      text: "Adipiscing ullamcorper Adipiscing ullamcorper Adipiscing ullamcorper Adipiscing ullamcorper quam bibendum elementum arcu commodo diam.",
      author: "Jane Smith, Company B"
    },
    {
      image: testimonial2,
      alt: "Testimonial 2",
      text: "Adipiscing ullamcorper quam bibendum elementum arcu commodo diam.",
      author: "Jane Smith, Company B"
    },
    {
      image: testimonial3,
      alt: "Testimonial 2",
      text: "Adipiscing ullamcorper quam bibendum elementum arcu commodo diam.",
      author: "Jane Smith, Company B"
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const testimonialDiv = testimonialDivRef.current;
    if (!section || !testimonialDiv) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const testimonialRect = testimonialDiv.getBoundingClientRect();
      const relativeX = e.clientX - testimonialRect.left;
      
      setIsLeftHalf(relativeX <= testimonialRect.width / 2);

      api.start({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        immediate: false,
        config: { mass: 1, tension: 120, friction: 26 }
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [api]);

  const handleSlideChange = () => {
    setCurrentSlide((prev) => {
      const newSlide = isLeftHalf 
        ? (prev === testimonials.length - 1 ? 0 : prev + 1) 
        : (prev === 0 ? testimonials.length - 1 : prev - 1);
      return newSlide;
    });
  };

  return (
    <section ref={sectionRef} className="bg-[#191919] text-white relative w-full h-screen md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-6xl lg:text-[92px] font-bold text-left pt-8 md:pt-0 md:mb-10">
          TESTIMONIALS
        </h2>

        <div ref={testimonialDivRef} className="flex flex-col md:flex-row items-start mt-[6rem]">
          <div className="w-full md:w-2/3 relative h-96 overflow-hidden flex items-center">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{transform: `translateX(${-currentSlide * 100}%)`}}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full h-[800xp] flex">
                  <div className={`w-1/2 px-2 flex items-end ${index === (currentSlide + 1) % testimonials.length ? 'scale-100' : 'scale-75 opacity-50'}`}>
                    <Image
                      src={testimonials[(index + 1) % testimonials.length].image}
                      alt={testimonials[(index + 1) % testimonials.length].alt}
                      width={450}
                      height={600}
                      className={`object-cover grayscale`}
                    />
                  </div>
                  <div className={`w-1/2 px-2 flex items-end ${index === currentSlide ? 'scale-100' : 'scale-75 opacity-50'}`}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      width={450}
                      height={600}
                      className={`object-cover ${index === currentSlide ? '' : 'grayscale'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3 md:mt-[17rem] md:ml-8 relative ">
            <div className="text-base absolute w-full transition-all duration-500 ease-in-out flex flex-col">
              <p className=" md:text-xl text-left mb-4">
                {testimonials[currentSlide].text}
              </p>
              <p className="font-bold text-sm text-left mt-4 text-gray-400">
                - {testimonials[currentSlide].author}
              </p>
            </div>
          </div>
        </div>

        <animated.div
          className="absolute"
          style={{
            left: x,
            top: y,
            transform: 'translate(-50%, -50%)',
            zIndex: 20
          }}
        >
          <button
            onClick={handleSlideChange}
            className={`bg-[#717171] text-white rounded-full p-2 md:p-4 transition-all duration-300 ease-out ${
              isHovering ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
              fill="none"
              className="md:w-[50px] md:h-[50px]"
              style={{
                transform: isLeftHalf ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <circle cx="50" cy="50" r="43.5" fill="#717171" />
              <path
                d="M58.6711 46.75C58.6711 46.3788 58.4756 45.8863 58.2773 45.6469L47.0991 32.0135C46.5775 31.3942 45.7319 31.322 45.1236 31.9507C44.5798 32.5128 44.5662 33.6084 45.0689 34.219L54.042 45.1459H30.7257C29.9538 45.1459 29.3281 45.8641 29.3281 46.7501C29.3281 47.6361 29.9538 48.3543 30.7257 48.3543H54.042L45.0689 59.2812C44.5662 59.8912 44.6014 60.9601 45.1236 61.5495C45.6745 62.1713 46.5856 62.116 47.0991 61.4867L58.2773 47.8533C58.6056 47.4833 58.6657 47.1276 58.6711 46.7508V46.75Z"
                fill="#FFFBFB"
              />
            </svg>
          </button>
        </animated.div>
      </div>
    </section>
  );
};

export default Testimonial;
