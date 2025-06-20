"use client";

import React from "react";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-indigo-400"
    >
      {/* Header */}
      <motion.h1
        className="text-4xl p-4 font-bold tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact
      </motion.h1>

      {/* Background Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-400 h-32 w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
        {/* Social Media Section */}
        <motion.div
          className="w-full md:w-1/2 p-5 md:px-0 mx-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 border border-secondaryBackground w-full lg:w-1/2 h-full p-5 pt-8">
            <h3 className="text-2xl font-semibold mb-5">My Social Media</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Github", icon: "M12 0c-6.626 ...", link: "#" },
                {
                  name: "Linkedin",
                  icon: "M21.800781 0 L 2.199219...",
                  link: "#",
                },
                { name: "Youtube", icon: "M19.615 3.184c-3.604...", link: "#" },
                { name: "Facebook", icon: "M12,0C5.373,0,0...", link: "#" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  className="flex items-center hover:text-white hover:bg-indigo-400 p-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 m-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d={item.icon} />
                  </svg>
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          action="#"
          className="w-full md:w-1/2 border border-ingido-500 p-6 bg-gray-900"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl pb-3 font-semibold">Send Message</h2>
          <div>
            <div className="flex flex-col mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-secondaryBackground focus:outline-none focus:bg-gray-800 focus:text-secondaryBackground"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-secondaryBackground focus:outline-none focus:bg-gray-800 focus:text-secondaryBackground"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                rows={4}
                id="message"
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-indigo-500 focus:outline-none focus:bg-gray-800 focus:text-indigo-500"
              ></textarea>
            </div>
          </div>
          <div className="w-full pt-3">
            <motion.button
              type="submit"
              className="w-full bg-gray-900 border border-indigo-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-indigo-500 hover:text-white text-xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Page;
