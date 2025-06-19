"use client";
import React, { useState } from "react";
import ContactModal from "./ContactModal"; // Import the modal

const CollabText = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="inline-flex items-center cursor-pointer"
        onClick={openModal}
      >
        <span className="text-gray-400 text-4xl">if you want to collab.</span>
        <div className="ml-2 flex-shrink-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="rotate-10 sm:w-6 sm:h-6"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
  

export default CollabText;
