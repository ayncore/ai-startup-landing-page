"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Define the nav links
const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

// AnimatedNavLink component for hover effects (text roll and border wipe)
const AnimatedNavLink = ({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative inline-block cursor-pointer overflow-hidden group" // 'group' class enables styling children on parent hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Fixed height and line height for consistent text roll effect
      style={{ height: "1.5rem", lineHeight: "1.5rem" }}
    >
      {/* Original text that slides up and fades out */}
      <motion.span
        className="block text-gray-200 dark:text-gray-200" // Default text color
        animate={{
          y: isHovered ? -24 : 0, // Slides up by its height (1.5rem = 24px)
          opacity: isHovered ? 0 : 1, // Fades out
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.span>

      {/* Duplicate text that slides up from below and fades in */}
      <motion.span
        className="absolute top-0 left-0 block text-indigo-300 dark:text-indigo-400" // Hover text color
        animate={{
          y: isHovered ? 0 : 24, // Slides from below to visible position
          opacity: isHovered ? 1 : 0, // Fades in
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.span>

      {/* Bottom border that comes from left to right */}
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-indigo-300 dark:bg-indigo-400" // Border line color and thickness
        initial={{ width: 0 }} // Starts with 0 width
        animate={{ width: isHovered ? "100%" : "0%" }} // Expands to 100% on hover, shrinks back on leave
        transition={{ duration: 0.3, ease: "easeOut" }} // Animation duration for the border
      />
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 top-0 left-0 flex justify-center py-4 px-4 sm:px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg dark:bg-black/10 dark:border-white/10"
      >
        <div className="flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white dark:text-indigo-400">
            AI Startup
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              // Using the new AnimatedNavLink component
              <AnimatedNavLink key={link.name} href={link.href}>
                {link.name}
              </AnimatedNavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-200 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              key="mobile-menu"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/5 backdrop-blur-md px-6 rounded-b-2xl"
            >
              <ul className="flex flex-col gap-4 py-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-gray-200 hover:text-indigo-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}