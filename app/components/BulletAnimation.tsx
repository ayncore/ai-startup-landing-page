"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Brands", "Applications", "Web Apps", "Products"];

export default function AnimatedBulletText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center px-8 font-sans">
      {/* Static Heading */}
      <h1 className="text-9xl font-bold">Designing</h1>

      {/* Rotating Bullet Text */}
      <div className="h-6/12 text-6xl overflow-hidden relative mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute text-6xl font-bold"
          >
            • {words[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
