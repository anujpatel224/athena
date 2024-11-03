"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Link from 'next/link';
import Image from 'next/image';
import LogoIcon from '@/public/images/navbarlogo.svg';

export default function Navbar() {
  const menuItems = ["Venue Hire", "Discover", "Live Events"];
  
  // State to track the mobile menu's open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Framer Motion variants for the sliding animation
  const menuVariants = {
    open: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      y: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  useEffect(() => {
    // Animate each menu item on hover
    document.querySelectorAll(".menu-item").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item.querySelectorAll("span"), {
          rotationX: 360,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
        });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item.querySelectorAll("span"), {
          rotationX: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });

    // GSAP animation for the pulsing logo effect
    const logoBeat = gsap.to(".logo img", {
      scale: 1.3,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      ease: "power1.inOut",
    });

    // Cleanup event listeners on unmount
    return () => {
      logoBeat.kill();
    };
  }, []);
  

  return (
    <header className="bg-[#140B0B] text-white">
      <div className="bg-[#140B0B] container mx-auto flex items-center justify-between py-4 px-6 fixed top-0 left-0 w-full z-[99999] md:static">
        {/* Logo */}
        <div className="text-2xl font-bold logo">
              <Link href="#">
                  <Image src={LogoIcon} alt="Logo" width={60} height={40} className="w-24 h-auto" />
              </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <div key={item} className="menu-item text-center relative">
            <Link href={`#${item.toLowerCase()}`} className="overflow-hidden text-white">
              {item.split("").map((char, index) => (
                <span key={index} className="inline-block transition-transform">
                  {char}
                </span>
              ))}
            </Link>
          </div>
        ))}
        </nav>

        {/* Enquire Button for Desktop */}
        <div className="hidden md:block">
        <Link
          href="#"
          className="enquire-button bg-[#F43900] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition duration-300"
        >
          Enquire Now
        </Link>
      </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with sliding animation */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden fixed bottom-0 left-0 w-full h-full bg-[#140B0B] z-50"
      >
        <div className="h-full flex flex-col items-start justify-end pb-16 px-6 py-4 space-y-4">
          <Link href="#" className="text-2xl text-white hover:text-gray-300">
            Venue Hire
          </Link>
          <Link href="#" className="text-2xl text-white hover:text-gray-300">
            Discover
          </Link>
          <Link href="#" className="text-2xl text-white hover:text-gray-300">
            Live Events
          </Link>
          <Link
            href="#"
            className="text-2xl bg-[#F43900] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition duration-300"
          >
            Enquire Now
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}
