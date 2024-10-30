'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import LogoIcon from '@/public/images/navbarlogo.svg';
import HeroImg from '@/public/images/hero.png';

export default function MainHeroSection() {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);

      // Toggle scrolling based on the scroll position (change threshold as needed)
      if (window.scrollY > window.innerHeight * 0.8) {
        setHasScrolledPast(true);
      } else {
        setHasScrolledPast(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  // Define scale transformation based on scroll position
  const scale = useTransform(scrollY, [0, window.innerHeight * 0.8], [1, 1.5]);

  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen bg-black text-white ${hasScrolledPast ? 'overflow-y-auto' : 'overflow-hidden'}`}
    >
      {/* Logo */}
      <div>
        <Image src={LogoIcon} alt="Logo" width={100} height={40} className="w-64 h-auto mx-auto" />
      </div>

      {/* Arched Image with Welcome Text */}
      <motion.div
        style={{ scale }}
        className="relative mt-8 w-4/5 max-w-3xl overflow-hidden border-t-4 border-l-4 border-r-4 border-white rounded-t-full max-h-[70vh]"
      >
        <div className="relative aspect-[4/5]">
          <Image
            src={HeroImg}
            alt="Athena Venue"
            layout="fill"
            objectFit="cover"
            className="rounded-t-full"
          />
        </div>
        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 text-center text-md md:text-4xl">
          <p>Welcome to Athena</p>
          <p>We are the Midlands' most unique venue</p>
        </div>
      </motion.div>
    </section>
  );
}
