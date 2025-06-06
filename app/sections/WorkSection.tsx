"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx"; // Optional: helps with conditional Tailwind classes

const tabs = ["All", "Web", "Mobile", "AI"];

const projects = [
  { id: 1, title: "AI Dashboard", category: "AI" },
  { id: 2, title: "Portfolio Website", category: "Web" },
  { id: 3, title: "Mobile Banking App", category: "Mobile" },
  { id: 4, title: "E-commerce Platform", category: "Web" },
  { id: 5, title: "Chatbot UI", category: "AI" },
];

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeTab);

  return (
    <section className="bg-white dark:bg-black px-6 py-20 min-h-screen text-black dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Our Work</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "px-4 py-2 rounded-full border transition-all",
              activeTab === tab
                ? "bg-indigo-600 text-white border-indigo-600 scale-105"
                : "bg-transparent border-gray-300 text-gray-600 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-500"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.category}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
