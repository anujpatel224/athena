"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import HeroImg from '../../public/images/heroimg.svg';

export default function HeroSection() {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Image animation from right
    tl.from(imageRef.current, {
      x: '100%',
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
      // Heading animation from left
      .from(
        headingRef.current,
        {
          x: '-100%',
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      // Paragraph animation from below
      .from(
        textRef.current,
        {
          y: '100%',
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      );
  }, []);

  return (
    <section className="relative bg-[#191919] text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative flex items-center justify-end">
          <div ref={imageRef} className="md:w-1/2">
            <Image
              src={HeroImg}
              alt="Athena Leicester"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div
            ref={headingRef}
            className="absolute inset-0 flex flex-col items-start justify-center p-6 md:p-12"
          >
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-wider text-white">
              ATHENA <br /> <span className="ml-10 lg:ml-40 xl:ml-60">LEICESTER</span>
            </h1>
          </div>
        </div>
        <div ref={textRef} className="flex items-center justify-center mt-4">
          <p className="text-lg md:text-xl lg:text-2xl italic max-w-prose text-center xl:text-left">
            Originally Designed In 1936 By Robert Arthur Bullivant As An Odeon Cinema, The Venue Represented One Of The Largest, Most Extravagant Buildings Within The Region Comprising Of Simply One Screen Seating Over 3000 Guests. It Was Then Subdivided Into 4 Screens In The 60s And Remained Closed Throughout Much Of The 90s.
          </p>
        </div>
      </div>
    </section>
  );
}
