"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedNavItem = ({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      className="relative inline-block cursor-pointer overflow-hidden text-base sm:text-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: "1.5rem" }} // Fixed height for cylinder effect
    >
      {/* Original text that slides up */}
      <motion.span
        className="block text-gray-300"
        animate={{
          y: isHovered ? -50 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
      >
        {children}
      </motion.span>

      {/* Duplicate text that slides up from below */}
      <motion.span
        className="absolute top-0 left-0 block text-white"
        animate={{
          y: isHovered ? 0 : 24,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
};

const CollabText = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="inline-flex items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-gray-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        if you want to collab.
      </span>

      <motion.div
        className="ml-2 sm:ml-3 text-white flex-shrink-0"
        initial={{ y: 10, opacity: 0, scale: 0.5 }}
        animate={{
          y: isHovered ? 0 : 10,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="rotate-10 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default function AnimatedNavUI() {
  const text = "AYN CORE".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each word
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut", // Fix: Use a valid easing type
        duration: 0.6,
      },
    },
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-0 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <div className="flex-1 lg:max-w-2xl">
            <motion.h1
              className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block">Drop a line</span>
              <span className="block">
                <CollabText />
              </span>
            </motion.h1>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-3 gap-8 sm:gap-12 lg:gap-24">
            {/* Useful Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">
                USEFUL
              </h3>
              <nav className="space-y-3 sm:space-y-4">
                <div className="block">
                  <AnimatedNavItem href="#home">Home</AnimatedNavItem>
                </div>
                <div className="block">
                  <AnimatedNavItem href="#works">Works</AnimatedNavItem>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="block">
                      <AnimatedNavItem href="#about">About</AnimatedNavItem>
                    </div>
                    <div className="block">
                      <AnimatedNavItem href="#contact">Contact</AnimatedNavItem>
                    </div>
                  </div>
                </motion.div>
              </nav>
            </motion.div>

            {/* About Section */}

            {/* Social Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">
                SOCIAL
              </h3>
              <nav className="space-y-3 sm:space-y-4">
                <div className="block">
                  <AnimatedNavItem href="#behance">Behance</AnimatedNavItem>
                </div>
                <div className="block">
                  <AnimatedNavItem href="#dribbble">Dribbble</AnimatedNavItem>
                </div>
                <div className="block">
                  <AnimatedNavItem href="#linkedin">LinkedIn</AnimatedNavItem>
                </div>
                <div className="block">
                  <AnimatedNavItem href="#twitter">Twitter</AnimatedNavItem>
                </div>
              </nav>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-8 sm:mt-10 lg:mt-10 pt-6 sm:pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            Designed by{" "}
            <AnimatedNavItem href="#designer">
              <span className="text-gray-400">
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="rotate-75 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </AnimatedNavItem>
          </p>
        </motion.div>

        {/* AYN CORE Text with partial visibility */}
        <div className="relative overflow-hidden h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px] xl:h-[200px]">
          {" "}
          {/* Adjust height as needed */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 text-center font-[monoton] opacity-10 text-white/10 dark:text-white/10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ transform: "translateY(26%)" }}
          >
            {text.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block text-[80px] sm:text-[100px] md:text-[120px] lg:text-[150px] xl:text-[180px] leading-none"
                variants={itemVariants}
              >
                {word}
                {index < text.length - 1 && (
                  <span className="inline-block w-4 sm:w-6 md:w-8"></span>
                )}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
}
