"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
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

  return (
    <header className="bg-[#140B0B] text-white">
      <div className="bg-[#140B0B] container mx-auto flex items-center justify-between py-4 px-6 fixed top-0 left-0 w-full z-[99999] md:static">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="font-geist-sans">ATHENA</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-gray-300">
            Venue Hire
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Discover
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Live Events
          </a>
        </nav>

        {/* Enquire Button for Desktop */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-[#F43900] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition duration-300"
          >
            Enquire Now
          </a>
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
          <a href="#" className="text-2xl text-white hover:text-gray-300">
            Venue Hire
          </a>
          <a href="#" className="text-2xl text-white hover:text-gray-300">
            Discover
          </a>
          <a href="#" className="text-2xl text-white hover:text-gray-300">
            Live Events
          </a>
          <a
            href="#"
            className="text-2xl bg-[#F43900] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition duration-300"
          >
            Enquire Now
          </a>
        </div>
      </motion.nav>
    </header>
  );
}
