import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        {/* Contact Form */}
        <div id="form-container" className="lg:p-5 font-Encode-Sans">
          <div className="overflow-hidden">
            <h3 className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold">
              Contact
            </h3>
          </div>
          <form method="POST" action="">
            <div className="mx-auto rounded-xl max-w-xl">
              <div className="grid grid-cols-1 gap-6 label">
                <label htmlFor="name" className="block border-b py-2">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none bg-cool-darker uppercase font-bold text-3xl"
                  />
                </label>
                <label htmlFor="email" className="block border-b">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                  />
                </label>
                <label htmlFor="phone" className="block border-b">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                  />
                </label>
                <label htmlFor="company" className="block border-b">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company"
                    required
                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                  />
                </label>
                <label className="block border-b">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us a little more about your cool project!"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige text-2xl font-bold"
                  ></textarea>
                </label>
                <div className="text-center">
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 hover:bg-indigo-300 hover:text-neutral-800 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const CollabText = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="inline-flex items-center cursor-pointer"
        onClick={openModal}
      >
        <span className="text-gray-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          if you want to collab.
        </span>
        <motion.div
          className="ml-2 sm:ml-3 text-white flex-shrink-0"
          initial={{ y: 10, opacity: 0, scale: 0.5 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
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

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default CollabText;
